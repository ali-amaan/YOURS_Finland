"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Mark from "@/components/Mark";
import { nav } from "@/lib/content";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/80 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Mark />
          <span className="leading-tight">
            <span className="block font-display text-lg font-medium tracking-tight">YOURS</span>
            <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-moss">
              Finland
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium ${active ? "text-pine" : "text-ink/70 hover:text-ink"}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/join"
            className="rounded-full bg-pine px-4 py-2 text-sm font-semibold text-paper transition hover:bg-pine-deep"
          >
            Join
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
            <span className="h-px w-full bg-ink" />
            <span className="h-px w-full bg-ink" />
            <span className="h-px w-3 bg-ink" />
          </span>
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-ink/10 lg:hidden" aria-label="Mobile">
          <div className="shell flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/join"
              className="mb-3 mt-2 inline-flex justify-center rounded-full bg-pine px-4 py-3 text-sm font-semibold text-paper"
              onClick={() => setOpen(false)}
            >
              Join the chapter
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
