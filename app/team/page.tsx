import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { lead, openSeats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team",
  description: "Dr. Nour leads YOURS Finland. The remaining team seats are open placeholders.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        kicker="Team"
        title="One lead. The rest of the bench is open."
        lede="Dr. Nour heads the chapter. Every other card on this page is a placeholder for a seat that has not been filled."
      />
      <section className="shell py-14">
        <article className="card grid gap-8 p-7 sm:p-10 lg:grid-cols-[220px_1fr]">
          <div>
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-pine font-display text-4xl text-paper">
              {lead.initials}
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-copper">
              {lead.role}
            </p>
          </div>
          <div>
            <h2 className="display text-4xl">{lead.name}</h2>
            <p className="mt-2 text-ink/60">Also known in YOURS as {lead.alsoKnown}</p>
            <p className="mt-4 font-medium">{lead.appointment}</p>
            <p className="mt-1 text-sm text-ink/60">{lead.previous}</p>
            <div className="prose-page mt-6 text-base">
              {lead.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-6 flex flex-wrap gap-4 text-sm">
              {lead.links.map((link) => (
                <li key={link.href}>
                  <a className="text-link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <h2 className="display mt-16 text-3xl">Open seats</h2>
        <p className="mt-3 max-w-2xl text-ink/70">
          These roles are not secret appointments. Nobody holds them yet. If you can take one,
          say so when you join.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {openSeats.map((seat) => (
            <li key={seat.role} className="rounded-3xl border border-dashed border-ink/25 bg-white/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
                Placeholder
              </p>
              <h3 className="display mt-3 text-2xl">{seat.role}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{seat.brief}</p>
              <p className="mt-5 text-sm font-medium text-ink/45">To be appointed</p>
            </li>
          ))}
        </ul>
        <Link href="/join" className="mt-8 inline-block rounded-full bg-pine px-6 py-3 text-sm font-semibold text-paper">
          Offer to take a seat
        </Link>
      </section>
    </>
  );
}
