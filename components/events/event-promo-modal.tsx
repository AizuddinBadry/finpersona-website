"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  image_url: string;
  start_date: string;
  end_date: string;
}

export function EventPromoModal() {
  const [open, setOpen] = useState(false);
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAndShowModal();
  }, []);

  const checkAndShowModal = async () => {
    try {
      const supabase = createClient();

      // Fetch active event that should show modal
      const { data: activeEvent } = await supabase
        .from("events")
        .select("*")
        .eq("is_active", true)
        .eq("show_modal", true)
        .gte("end_date", new Date().toISOString())
        .order("start_date", { ascending: false })
        .limit(1)
        .single();

      if (!activeEvent) {
        setLoading(false);
        return;
      }

      // For anonymous users on the website, use localStorage
      const viewedEvents = JSON.parse(
        localStorage.getItem("finpersona_website_viewed_events") || "[]"
      );

      if (!viewedEvents.includes(activeEvent.id)) {
        setEvent(activeEvent as Event);
        setOpen(true);

        // Record the view in localStorage
        viewedEvents.push(activeEvent.id);
        localStorage.setItem(
          "finpersona_website_viewed_events",
          JSON.stringify(viewedEvents)
        );
      }
    } catch (error) {
      console.error("Error checking promo modal:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = () => {
    if (!event) return;

    // Navigate to event page on the app
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.finpersona.com";
    window.open(`${appUrl}/events/${event.slug}`, "_blank");
    setOpen(false);
  };

  const handleDismiss = () => {
    setOpen(false);
  };

  if (loading || !event) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>{event.title}</DialogTitle>
          <DialogDescription>{event.description}</DialogDescription>
        </DialogHeader>

        {/* Close button */}
        <Button
          variant="default"
          size="icon"
          className="absolute top-2 right-2 z-10 rounded-full bg-black/50 hover:bg-black/70 text-white"
          onClick={handleDismiss}
        >
          <X className="w-4 h-4" />
        </Button>

        {/* Clickable promotional image */}
        <div
          className="relative w-full aspect-square cursor-pointer hover:opacity-95 transition-opacity"
          onClick={handleImageClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleImageClick();
            }
          }}
        >
          <Image
            src={event.image_url}
            alt={event.title}
            fill
            className="object-contain"
            priority
            unoptimized
          />
        </div>

        {/* Call to action */}
        <div className="p-4 bg-gradient-to-r from-red-50 to-orange-50 border-t">
          <p className="text-center text-sm text-gray-600 mb-3">
            Click the image above to learn more about this event!
          </p>
          <Button
            onClick={handleImageClick}
            className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold"
          >
            View Event Details
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
