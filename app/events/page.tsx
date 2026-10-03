import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { events } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description: "The first season of YOURS Finland. Dates are not locked yet.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        kicker="Events"
        title="The first season is a plan, not a poster."
        lede="Three sessions open the chapter. Each one stays marked planned until a date, a room, and a host are confirmed. Nothing on this page has already happened."
      />
      <section className="shell py-12">
        <ol className="space-y-4">
          {events.map((event, index) => (
            <li key={event.id} className="card grid gap-6 p-6 sm:p-8 md:grid-cols-[120px_1fr]">
              <p className="font-display text-4xl text-copper">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="display text-3xl">{event.title}</h2>
                  <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-moss">
                    {event.status}
                  </span>
                </div>
                <p className="mt-4 max-w-2xl leading-relaxed text-ink/75">{event.summary}</p>
                <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-ink/50">When</dt>
                    <dd className="mt-1 font-medium">{event.when}</dd>
                  </div>
                  <div>
                    <dt className="text-ink/50">Where</dt>
                    <dd className="mt-1 font-medium">{event.where}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink/65">
          Want a seat when the date lands?{" "}
          <Link href="/join" className="text-link">
            Leave an interest note
          </Link>
          . Past events will appear here only after they have taken place.
        </p>
      </section>
    </>
  );
}
