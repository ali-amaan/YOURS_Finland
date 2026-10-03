import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { activities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Activities",
  description: "Briefings, workshops, peer counsel, and cross-field rooms for YOURS Finland.",
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader
        kicker="Activities"
        title="Four kinds of help, starting small."
        lede="The Korea chapter taught workshops and made introductions. Finland starts with the same four strands. Only the ones we can host this season are on the events list."
      />
      <section className="shell divide-y divide-ink/10 py-6">
        {activities.map((activity) => (
          <article id={activity.id} key={activity.id} className="grid gap-6 py-12 lg:grid-cols-[180px_1fr_0.8fr]">
            <p className="font-display text-4xl text-copper">{activity.index}</p>
            <div>
              <h2 className="display text-3xl sm:text-4xl">{activity.title}</h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/75">{activity.summary}</p>
            </div>
            <ul className="space-y-3 text-sm leading-relaxed text-ink/80 lg:pt-2">
              {activity.points.map((point) => (
                <li key={point} className="border-l-2 border-aurora pl-4">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <section className="shell pb-8">
        <Link href="/join" className="rounded-full bg-pine px-6 py-3 text-sm font-semibold text-paper">
          Say which strand you need
        </Link>
      </section>
    </>
  );
}
