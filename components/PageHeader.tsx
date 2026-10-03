export default function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-ink/10">
      <div className="shell py-16 sm:py-20">
        <p className="kicker">{kicker}</p>
        <h1 className="display mt-4 max-w-3xl text-4xl sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">{lede}</p>
      </div>
    </header>
  );
}
