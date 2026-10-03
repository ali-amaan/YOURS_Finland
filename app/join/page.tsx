import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import InterestForm from "@/components/InterestForm";

export const metadata: Metadata = {
  title: "Join",
  description: "Tell YOURS Finland you want in. The note goes to Dr. Nour by email.",
};

const points = [
  "You study or work as an early-career researcher in Finland.",
  "Joining at launch means Dr. Nour knows you want in. There is no card and no fee.",
  "Workshop places are intended to stay free, as they were in the Korea chapter.",
];

export default function JoinPage() {
  return (
    <>
      <PageHeader
        kicker="Join"
        title="Write to the chapter before it has a front desk."
        lede="The form prepares an email to Dr. Nour, the country lead. It is an expression of interest, not a membership record."
      />
      <section className="shell grid gap-10 py-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="display text-3xl">At this stage</h2>
          <ul className="mt-6 space-y-4">
            {points.map((point) => (
              <li key={point} className="border-l-2 border-aurora pl-4 text-ink/80">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <InterestForm />
      </section>
    </>
  );
}
