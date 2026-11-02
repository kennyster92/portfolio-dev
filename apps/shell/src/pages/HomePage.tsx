import type { ReactNode } from "react";
import { Link } from "react-router";
import { ProjectCard } from "../components/ProjectCard";
import { profile } from "../config/profile";
import { projects } from "../projects/registry";

export function HomePage() {
  return (
    <div className="space-y-28">
      <Hero />
      <section id="projects" className="scroll-mt-24">
        <SectionHeading eyebrow="Mini projects" title="Things I've built">
          Each project is an independent microfrontend, built and deployed on its own and loaded into this shell at
          runtime.
        </SectionHeading>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
      <Skills />
      <Contact />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-10 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 mx-auto h-80 max-w-3xl rounded-full bg-gradient-to-r from-accent/25 via-accent-2/20 to-accent/25 blur-3xl"
      />
      <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
        <span className="size-1.5 animate-pulse rounded-full bg-success" />
        Available for new opportunities · {profile.location}
      </p>
      <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-6xl">
        Hi, I'm {profile.name}.{" "}
        <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">{profile.role}</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">{profile.tagline}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-xl bg-fg px-5 py-3 text-sm font-medium text-bg shadow-lg shadow-fg/10 transition hover:opacity-90"
        >
          Explore projects
        </a>
        <Link
          to="/cv"
          className="rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium transition hover:bg-surface-2"
        >
          View CV
        </Link>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium transition hover:bg-surface-2"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <SectionHeading eyebrow="Toolbox" title="Skills & technologies" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {profile.skills.map((s) => (
          <div key={s.group} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="text-sm font-semibold">{s.group}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li key={item} className="rounded-md bg-surface-2 px-2 py-1 text-xs text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent/10 via-surface to-accent-2/10 p-8 text-center sm:p-14"
    >
      <h2 className="text-3xl font-bold tracking-tight">Let's build something.</h2>
      <p className="mx-auto mt-3 max-w-md text-muted">Open to roles, freelance work and interesting side projects.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-xl bg-accent px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >
          Say hello
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium transition hover:bg-surface-2"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs tracking-widest text-accent uppercase">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight">{title}</h2>
      {children && <p className="mt-3 text-muted">{children}</p>}
    </div>
  );
}
