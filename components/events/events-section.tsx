"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, Trophy, Gift, ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { getDictionary } from "@/lib/i18n/get-dictionary";

interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  image_url: string;
  start_date: string;
  end_date: string;
  event_type: string;
  prizes: Array<{ place: number; amount: number; currency: string }>;
}

interface EventsSectionProps {
  dict: ReturnType<typeof getDictionary>;
}

export function EventsSection({ dict }: EventsSectionProps) {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("is_active", true)
        .gte("end_date", new Date().toISOString())
        .order("start_date", { ascending: false });

      if (error) {
        console.error("Error fetching events:", error);
        return;
      }

      setEvents((data || []) as Event[]);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  const getEventStatus = (startDate: string, endDate: string) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (now < start) return { label: dict.events.comingSoon, variant: "secondary" as const };
    if (now > end) return { label: dict.events.ended, variant: "destructive" as const };
    return { label: dict.events.activeNow, variant: "success" as const };
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-MY", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // Don't render if no events
  if (!loading && events.length === 0) {
    return null;
  }

  // Show loading state
  if (loading) {
    return (
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-10 w-64 bg-gray-200 rounded mb-4"></div>
              <div className="h-6 w-96 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-red-50/30 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(239,68,68,0.05),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 shadow-sm mb-6">
            <Gift className="w-4 h-4 text-red-600" />
            <span className="text-sm text-red-700 font-medium">
              {dict.events.badge}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            {dict.events.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {dict.events.subtitle}
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {events.map((event) => {
            const status = getEventStatus(event.start_date, event.end_date);
            const topPrize = event.prizes?.[0];
            const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.finpersona.com";

            return (
              <a
                key={event.id}
                href={`${appUrl}/events/${event.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden h-full group border-gray-200 hover:border-red-200 hover:-translate-y-1">
                  <div className="relative h-56 bg-gray-50">
                    <Image
                      src={event.image_url}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                    <Badge
                      variant={status.variant}
                      className="absolute top-4 right-4"
                    >
                      {status.label}
                    </Badge>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle className="text-xl text-gray-900 group-hover:text-red-600 transition-colors">
                        {event.title}
                      </CardTitle>
                      {topPrize && (
                        <div className="flex items-center gap-1 text-red-600 font-semibold whitespace-nowrap">
                          <Trophy className="w-4 h-4" />
                          <span className="text-sm">
                            {topPrize.currency}{topPrize.amount}
                          </span>
                        </div>
                      )}
                    </div>
                    <CardDescription className="line-clamp-2">
                      {event.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {formatDate(event.start_date)} - {formatDate(event.end_date)}
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg shadow-red-500/30"
          >
            <a
              href={`${process.env.NEXT_PUBLIC_APP_URL || "https://app.finpersona.com"}/events`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.events.viewAll}
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
