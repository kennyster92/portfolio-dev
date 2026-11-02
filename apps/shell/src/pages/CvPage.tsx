import type { ReactNode } from "react";
import { cv } from "../config/cv";
import { profile } from "../config/profile";

const contacts = [
  { label: profile.email, href: `mailto:${profile.email}` },
  { label: "kevinceni.ch", href: profile.links.website },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "Instagram", href: profile.links.instagram },
];

export function CvPage() {
  return (
    <article className="mx-auto max-w-5xl">
      <header className="flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs tracking-widest text-accent uppercase print:hidden">Curriculum vitae</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">{profile.name}</h1>
          <p className="mt-1 text-lg text-muted">{cv.headline}</p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
            <li>{profile.location}</li>
            {contacts.map((c) => (
              <li key={c.href}>
                <a href={c.href} target="_blank" rel="noreferrer" className="transition hover:text-fg">
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-3 print:hidden">
          <a
            href={cv.pdf.href}
            download={cv.pdf.fileName}
            className="rounded-xl bg-accent px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Download PDF
          </a>
          <a
            href={cv.pdf.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium transition hover:bg-surface-2"
          >
            Open PDF
          </a>
        </div>
      </header>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] print:grid-cols-[minmax(0,1fr)_14rem]">
        <div className="space-y-12">
          <CvSection title="Summary">
            <p className="leading-relaxed text-muted text-pretty">{cv.summary}</p>
          </CvSection>

          <CvSection title="Work experience">
            <Timeline entries={cv.experience.map((j) => ({ ...j, title: j.role, subtitle: j.company }))} />
          </CvSection>

          <CvSection title="Education">
            <Timeline entries={cv.education.map((e) => ({ ...e, title: e.degree, subtitle: e.school }))} />
          </CvSection>

          <CvSection title="Personal projects">
            <ul className="space-y-6">
              {cv.projects.map((p) => (
                <li key={p.title} className="break-inside-avoid">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h3 className="font-semibold">{p.title}</h3>
                    {p.period && <p className="shrink-0 font-mono text-xs text-muted">{p.period}</p>}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                </li>
              ))}
            </ul>
          </CvSection>
        </div>

        <aside className="space-y-10">
          <CvSection title="Languages">
            <ul className="space-y-2.5 text-sm">
              {cv.languages.map((l) => (
                <li key={l.name} className="flex items-center justify-between gap-4">
                  <span>
                    {l.name} <span className="text-muted">({l.label})</span>
                  </span>
                  <span className="flex gap-1" aria-label={`${l.level} of 5`}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span key={n} className={`size-2 rounded-full ${n <= l.level ? "bg-accent" : "bg-border"}`} />
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </CvSection>

          <CvSection title="Skills">
            <div className="space-y-5">
              {cv.skills.map((s) => (
                <div key={s.group}>
                  <h3 className="text-sm font-semibold">{s.group}</h3>
                  <Chips items={s.items} />
                </div>
              ))}
            </div>
          </CvSection>

          <CvSection title="Certificates">
            <ul className="space-y-4 text-sm">
              {cv.certificates.map((c) => (
                <li key={c.title} className="break-inside-avoid">
                  <p className="font-medium">{c.title}</p>
                  <p className="mt-0.5 text-muted">{c.detail}</p>
                </li>
              ))}
            </ul>
          </CvSection>

          <CvSection title="Personal interests">
            <Chips items={cv.interests} />
          </CvSection>
        </aside>
      </div>

      <p className="mt-12 text-xs text-muted">Last updated {cv.updated}</p>
    </article>
  );
}

function CvSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 font-mono text-xs tracking-widest text-accent uppercase">{title}</h2>
      {children}
    </section>
  );
}

type TimelineEntry = {
  title: string;
  subtitle: string;
  location: string;
  period: string;
  highlights: readonly string[];
};

function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="space-y-8 border-l border-border pl-5">
      {entries.map((e) => (
        <li key={`${e.subtitle}-${e.period}`} className="relative break-inside-avoid">
          <span aria-hidden className="absolute top-1.5 -left-[25px] size-2.5 rounded-full border-2 border-accent bg-bg" />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <h3 className="font-semibold">{e.title}</h3>
            <p className="shrink-0 font-mono text-xs text-muted">{e.period}</p>
          </div>
          <p className="text-sm text-accent">
            {e.subtitle} <span className="text-muted">· {e.location}</span>
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
            {e.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

function Chips({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-2 flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item} className="rounded-md bg-surface-2 px-2 py-1 text-xs text-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}
