import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell py-24">
      <p className="kicker">404</p>
      <h1 className="display mt-4 text-5xl">That page is not in the chapter.</h1>
      <Link href="/" className="text-link mt-8 inline-block">
        Back to the opening
      </Link>
    </section>
  );
}
