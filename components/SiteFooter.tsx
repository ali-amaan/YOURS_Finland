import Link from "next/link";
import Mark from "@/components/Mark";
import { lead, site } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-ink/10 bg-pine text-paper">
      <div className="shell grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Mark />
            <div>
              <p className="font-display text-2xl">YOURS Finland</p>
              <p className="text-sm text-aurora">{site.society}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/75">
            A volunteer chapter for early-career researchers in Finland. Led by {lead.shortName}.
            The other seats are open.
          </p>
        </div>
        <div>
          <p className="kicker text-aurora">Chapter</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-aurora">
                About
              </Link>
            </li>
            <li>
              <Link href="/activities" className="hover:text-aurora">
                Activities
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-aurora">
                Events
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-aurora">
                Team
              </Link>
            </li>
            <li>
              <Link href="/join" className="hover:text-aurora">
                Join
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="kicker text-aurora">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li>
              <a className="hover:text-aurora" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>Department of Civil Engineering, Aalto University, Espoo</li>
            <li>
              <a className="hover:text-aurora" href={site.koreaFacebook}>
                YOURS in South Korea
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-2 py-5 text-xs text-paper/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} YOURS Finland. Volunteer chapter, not a university office.</p>
          <p>Interim contact is the country lead’s published Aalto address.</p>
        </div>
      </div>
    </footer>
  );
}
