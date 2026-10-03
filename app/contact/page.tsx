import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { lead, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact YOURS Finland through Dr. Nour at Aalto University.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact"
        title="Until there is a chapter inbox, write to the lead."
        lede="YOURS Finland has no office of its own. The interim address is Dr. Nour’s published university email."
      />
      <section className="shell grid gap-4 py-14 md:grid-cols-3">
        <article className="card p-6 md:col-span-2">
          <h2 className="display text-3xl">{lead.shortName}</h2>
          <p className="mt-2 text-ink/70">{lead.name}</p>
          <p className="mt-4">{lead.appointment}</p>
          <a className="text-link mt-6 inline-block text-lg" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <p className="mt-4 text-sm leading-relaxed text-ink/60">
            Department of Civil Engineering, Aalto University, Espoo. That is his academic post.
            Mail sent there about YOURS is chapter mail landing in a professor’s inbox, which is
            why a separate address should replace it once communications has a person.
          </p>
        </article>
        <article className="rounded-3xl bg-pine p-6 text-paper">
          <h2 className="font-display text-2xl">Also</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a className="text-aurora" href={lead.links[0].href}>
                Aalto people page
              </a>
            </li>
            <li>
              <a className="text-aurora" href={site.koreaFacebook}>
                YOURS South Korea
              </a>
            </li>
            <li>
              <Link className="text-aurora" href="/join">
                Interest form
              </Link>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
