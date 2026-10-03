import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "What YOURS Finland is, who it is for, and how it relates to the society in South Korea.",
};

const mission = [
  "Bring researchers from different disciplines into the same conversation.",
  "Offer counsel from someone further along in a nearby field.",
  "Make connections that a single research group does not provide.",
];

const facts = [
  {
    title: "Who it is for",
    text: "Master’s students, doctoral researchers, postdocs, and early-career researchers working in Finland. International researchers are the people this kind of society usually catches first.",
  },
  {
    title: "What it is",
    text: "A volunteer chapter of the Young Researchers Society. Workshops are intended to stay free, in the tradition of the Korea chapter.",
  },
  {
    title: "What it is not",
    text: "Not an office of Aalto University, not a visa service, and not a funder. The country lead works at Aalto. The chapter does not speak for the university.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About"
        title="A society for the years before the title settles."
        lede="YOURS Finland is the Finnish chapter of the Young Researchers Society. It opens under Dr. Nour, with the rest of the team still to be appointed."
      />
      <section className="shell grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="prose-page">
          <p>
            Young Researchers’ Society is a circle of volunteer researchers. In South Korea it
            grew by running free workshops and seminars: a way into the local research
            environment, a LaTeX afternoon, a room where a transportation student and a
            biologist could both learn something.
          </p>
          <p>
            Finland is a different system, with the same kind of gap. A person can have a
            contract, a supervisor, and a desk, and still not know how the surrounding world
            works. YOURS Finland exists for that gap.
          </p>
          <p>
            The public site stays in English because that is the working language of most
            international researchers here. A Finnish edition can follow when the team is large
            enough to maintain it.
          </p>
        </div>
        <div className="rounded-[2rem] bg-pine p-8 text-paper">
          <p className="kicker text-aurora">Mission</p>
          <ul className="mt-6 space-y-5">
            {mission.map((item) => (
              <li key={item} className="border-t border-white/15 pt-5 text-lg leading-snug">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="shell grid gap-4 pb-4 md:grid-cols-3">
        {facts.map((fact) => (
          <article key={fact.title} className="card p-6">
            <h2 className="display text-2xl">{fact.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">{fact.text}</p>
          </article>
        ))}
      </section>
      <section className="shell py-12">
        <p className="max-w-3xl text-ink/75">
          The sister chapter keeps its public home on{" "}
          <a className="text-link" href={site.koreaFacebook}>
            Facebook
          </a>
          . This chapter keeps its own site, its own lead, and its own programme.
        </p>
        <Link href="/team" className="text-link mt-6 inline-block">
          Read about Dr. Nour
        </Link>
      </section>
    </>
  );
}
