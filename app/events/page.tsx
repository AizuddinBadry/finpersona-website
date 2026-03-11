"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, Trophy, Gift, ArrowRight, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { PageShell } from "@/components/layout/page-shell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

type EventStatus = { label: string; variant: "secondary" | "destructive" | "success" };

function getEventStatus(startDate: string, endDate: string): EventStatus {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);
  if (now < start) return { label: "Coming Soon", variant: "secondary" };
  if (now > end) return { label: "Ended", variant: "destructive" };
  return { label: "Active Now", variant: "success" };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-MY", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.finpersona.com";

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from("events")
          .select("*")
          .eq("is_active", true)
          .order("start_date", { ascending: false });
        if (error) {
          console.error("Error fetching events:", error);
          return;
        }
        setEvents((data || []) as Event[]);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <PageShell>
      <div className="bg-white min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(239,68,68,0.06),transparent)]" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 shadow-sm mb-6">
              <Gift className="w-4 h-4 text-red-600" />
              <span className="text-sm text-red-700 font-medium">Win Amazing Prizes</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Events &amp; Promotions
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Join our campaigns and win prizes while tracking your receipts.
            </p>
          </div>
        </section>

        {/* Events */}
        <section className="pb-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <Loader2 className="w-8 h-8 text-red-500 animate-spin" />
                <p className="text-gray-500 text-sm">Loading events...</p>
              </div>
            ) : events.length === 0 ? (
              <div className="text-center py-24">
                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-5">
                  <Trophy className="w-7 h-7 text-gray-400" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">No events right now</h2>
                <p className="text-gray-500 text-sm max-w-xs mx-auto">
                  Check back soon — new campaigns and promotions are on the way.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => {
                  const status = getEventStatus(event.start_date, event.end_date);
                  const topPrize = event.prizes?.[0];
                  return (
                    <a
                      key={event.id}
                      href={`${appUrl}/events/${event.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden h-full group border-gray-200 hover:border-red-200 hover:-translate-y-1">
                        <div className="relative h-52 bg-gray-50">
                          <Image
                            src={event.image_url}
                            alt={event.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            unoptimized
                          />
                          <Badge
                            variant={status.variant}
                            className="absolute top-3 right-3"
                          >
                            {status.label}
                          </Badge>
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between gap-3">
                            <CardTitle className="text-lg text-gray-900 group-hover:text-red-600 transition-colors leading-snug">
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
                          <CardDescription className="line-clamp-2 text-sm">
                            {event.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>
                                {formatDate(event.start_date)} – {formatDate(event.end_date)}
                              </span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  );
                })}
              </div>
            )}

            {/* CTA */}
            {!loading && events.length > 0 && (
              <div className="mt-14 text-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg shadow-red-500/25"
                >
                  <a href={`${appUrl}/events`} target="_blank" rel="noopener noreferrer">
                    Join Events in the App
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
