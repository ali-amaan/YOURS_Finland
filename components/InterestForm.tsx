"use client";

import { FormEvent, useMemo, useState } from "react";
import { interests, site, stages } from "@/lib/content";

type Fields = {
  name: string;
  email: string;
  institution: string;
  stage: string;
  note: string;
  picks: string[];
};

const empty: Fields = {
  name: "",
  email: "",
  institution: "",
  stage: stages[0],
  note: "",
  picks: [],
};

export default function InterestForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [error, setError] = useState("");
  const [draft, setDraft] = useState("");

  const mailto = useMemo(() => {
    if (!draft) return "";
    const subject = encodeURIComponent("YOURS Finland — interest");
    const body = encodeURIComponent(draft);
    return `mailto:${site.email}?subject=${subject}&body=${body}`;
  }, [draft]);

  function toggle(pick: string) {
    setFields((current) => ({
      ...current,
      picks: current.picks.includes(pick)
        ? current.picks.filter((item) => item !== pick)
        : [...current.picks, pick],
    }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!fields.name.trim() || !fields.email.trim() || !fields.institution.trim()) {
      setError("Name, email, and institution are required.");
      setDraft("");
      return;
    }
    if (!fields.email.includes("@")) {
      setError("Enter an email address.");
      setDraft("");
      return;
    }
    setError("");
    const message = [
      "YOURS Finland — expression of interest",
      "",
      `Name: ${fields.name.trim()}`,
      `Email: ${fields.email.trim()}`,
      `Institution: ${fields.institution.trim()}`,
      `Stage: ${fields.stage}`,
      `Interested in: ${fields.picks.length ? fields.picks.join(", ") : "General membership"}`,
      "",
      fields.note.trim() || "No extra note.",
    ].join("\n");
    setDraft(message);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("YOURS Finland — interest")}&body=${encodeURIComponent(message)}`;
  }

  async function copyDraft() {
    if (!draft) return;
    await navigator.clipboard.writeText(draft);
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Name
          <input
            className="mt-2 w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3"
            name="name"
            autoComplete="name"
            value={fields.name}
            onChange={(event) => setFields({ ...fields, name: event.target.value })}
            required
          />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input
            className="mt-2 w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3"
            type="email"
            name="email"
            autoComplete="email"
            value={fields.email}
            onChange={(event) => setFields({ ...fields, email: event.target.value })}
            required
          />
        </label>
        <label className="block text-sm font-medium">
          Institution
          <input
            className="mt-2 w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3"
            name="institution"
            value={fields.institution}
            onChange={(event) => setFields({ ...fields, institution: event.target.value })}
            required
          />
        </label>
        <label className="block text-sm font-medium">
          Stage
          <select
            className="mt-2 w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3"
            name="stage"
            value={fields.stage}
            onChange={(event) => setFields({ ...fields, stage: event.target.value })}
          >
            {stages.map((stage) => (
              <option key={stage}>{stage}</option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium">What do you want from the chapter?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {interests.map((interest) => {
            const checked = fields.picks.includes(interest);
            return (
              <label
                key={interest}
                className={`cursor-pointer rounded-full border px-4 py-2 text-sm ${
                  checked ? "border-pine bg-pine text-paper" : "border-ink/15 bg-white"
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => toggle(interest)}
                />
                {interest}
              </label>
            );
          })}
        </div>
      </fieldset>

      <label className="mt-6 block text-sm font-medium">
        Note
        <textarea
          className="mt-2 min-h-32 w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3"
          name="note"
          value={fields.note}
          onChange={(event) => setFields({ ...fields, note: event.target.value })}
          placeholder="Field, campus, or the seat you could help fill."
        />
      </label>

      {error ? (
        <p className="mt-4 text-sm font-medium text-copper" role="alert">
          {error}
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-full bg-pine px-6 py-3 text-sm font-semibold text-paper hover:bg-pine-deep"
        >
          Write to Dr. Nour
        </button>
        <p className="max-w-sm text-sm text-ink/60">
          This opens your email app. The website does not store the message.
        </p>
      </div>

      {draft ? (
        <div className="mt-6 rounded-2xl bg-mist p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold">Message ready</p>
            <button type="button" className="text-sm font-medium text-pine" onClick={copyDraft}>
              Copy
            </button>
          </div>
          <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-ink/80">
            {draft}
          </pre>
          <a className="text-link mt-3 inline-block text-sm" href={mailto}>
            Open the email again
          </a>
        </div>
      ) : null}
    </form>
  );
}
