import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getNews, news } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) return { title: "Note" };
  return { title: item.title, description: item.dek };
}

export default async function NewsArticle({ params }: Props) {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) notFound();

  return (
    <article className="shell py-16 sm:py-20">
      <p className="kicker">Note</p>
      <h1 className="display mt-4 max-w-3xl text-4xl sm:text-6xl">{item.title}</h1>
      <p className="mt-6 text-sm text-ink/55">
        <time dateTime={item.date}>{formatDate(item.date)}</time>
        <span> · YOURS Finland</span>
      </p>
      <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink/80">{item.dek}</p>
      <div className="prose-page mt-8">
        {item.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <Link href="/news" className="text-link mt-10 inline-block">
        All notes
      </Link>
    </article>
  );
}
