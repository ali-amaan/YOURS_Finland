import Link from "next/link";
import { events, formatDate, lead, news, pillars, site } from "@/lib/content";

export default function HomePage() {
  const [feature, ...rest] = news;

  return (
    <>
      <section className="shell grid items-end gap-12 py-16 sm:py-24 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="kicker">Chapter opening · 2026</p>
          <h1 className="display mt-5 max-w-3xl text-5xl leading-[1.02] sm:text-7xl">
            Early-career research, with people beside you.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
            {site.society} began as a volunteer circle in South Korea. YOURS Finland opens the
            same idea here: free workshops, peer counsel, and a welcome for researchers finding
            their footing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/join"
              className="rounded-full bg-pine px-6 py-3 text-sm font-semibold text-paper hover:bg-pine-deep"
            >
              Join the chapter
            </Link>
            <Link
              href="/events"
              className="rounded-full border border-ink/15 bg-white/70 px-6 py-3 text-sm font-semibold hover:border-ink/30"
            >
              See the first season
            </Link>
          </div>
        </div>

        <aside className="card relative overflow-hidden p-7">
          <div className="aurora-drift absolute -right-8 -top-10 h-32 w-32 rounded-full bg-aurora/70 blur-2xl" />
          <p className="kicker relative">Country lead</p>
          <p className="display relative mt-4 text-4xl">{lead.shortName}</p>
          <p className="relative mt-2 text-sm text-ink/70">{lead.name}</p>
          <p className="relative mt-4 text-sm leading-relaxed text-ink/80">{lead.appointment}</p>
          <dl className="relative mt-6 space-y-3 border-t border-ink/10 pt-5 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-ink/55">Chapter</dt>
              <dd className="font-medium">Opening</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink/55">Team</dt>
              <dd className="font-medium">Four seats open</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink/55">Sister chapter</dt>
              <dd className="font-medium">South Korea</dd>
            </div>
          </dl>
          <Link href="/team" className="text-link relative mt-6 inline-block text-sm">
            Meet the lead
          </Link>
        </aside>
      </section>

      <section className="border-y border-ink/10 bg-white/40">
        <div className="shell grid gap-10 py-16 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.index}>
              <p className="font-display text-3xl text-copper">{pillar.index}</p>
              <h2 className="display mt-3 text-3xl">{pillar.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-ink/75">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell py-16 sm:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="kicker">First season</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">Planned, and labelled as such.</h2>
          </div>
          <Link href="/events" className="hidden text-sm font-semibold text-pine sm:inline">
            All sessions
          </Link>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {events.map((event) => (
            <article key={event.id} className="card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
                {event.status}
              </p>
              <h3 className="display mt-3 text-2xl">{event.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{event.summary}</p>
              <p className="mt-5 text-sm font-medium">
                {event.when}
                <span className="text-ink/40"> · </span>
                {event.where}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell grid gap-10 pb-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-pine p-8 text-paper sm:p-10">
          <p className="kicker text-aurora">From Korea to Finland</p>
          <h2 className="display mt-4 text-4xl text-paper">The same society, a different research system.</h2>
          <p className="mt-5 leading-relaxed text-paper/75">
            In South Korea, YOURS ran free workshops and seminars so researchers from different
            fields could share a room. Finland keeps that purpose: interdisciplinary exchange,
            counsel from someone senior in the field, and connections that a single lab does not
            provide.
          </p>
          <a className="mt-6 inline-block text-sm font-semibold text-aurora" href={site.koreaFacebook}>
            YOURS South Korea on Facebook
          </a>
        </div>
        <div>
          <p className="kicker">Notes</p>
          <article className="mt-4">
            <p className="text-sm text-ink/55">{formatDate(feature.date)}</p>
            <h3 className="display mt-2 text-3xl">
              <Link href={`/news/${feature.slug}`} className="hover:text-moss">
                {feature.title}
              </Link>
            </h3>
            <p className="mt-3 text-ink/75">{feature.dek}</p>
          </article>
          <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {rest.map((item) => (
              <li key={item.slug} className="py-4">
                <Link href={`/news/${item.slug}`} className="group flex items-baseline justify-between gap-6">
                  <span className="font-medium group-hover:text-moss">{item.title}</span>
                  <span className="shrink-0 text-sm text-ink/50">{formatDate(item.date)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
