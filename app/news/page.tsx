import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { formatDate, news } from "@/lib/content";

export const metadata: Metadata = {
  title: "News",
  description: "Notes from the opening of YOURS Finland.",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        kicker="News"
        title="Notes from the opening."
        lede="Chapter announcements only. When a session has a date, or a seat is filled, it will be written here."
      />
      <section className="shell py-12">
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {news.map((item) => (
            <li key={item.slug}>
              <Link href={`/news/${item.slug}`} className="group grid gap-3 py-8 sm:grid-cols-[180px_1fr]">
                <time className="text-sm text-ink/55" dateTime={item.date}>
                  {formatDate(item.date)}
                </time>
                <span>
                  <span className="display block text-3xl group-hover:text-moss">{item.title}</span>
                  <span className="mt-3 block max-w-2xl text-ink/70">{item.dek}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
