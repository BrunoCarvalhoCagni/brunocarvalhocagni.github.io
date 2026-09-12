"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";
import { 
  Mail, 
  ArrowUpRight, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  ExternalLink 
} from "lucide-react";
import { Github, Linkedin } from "../components/Icons";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 selection:bg-indigo-500 selection:text-white relative font-sans">
      <Navbar />

      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-28">
        
        {/* HERO SECTION */}
        <section className="space-y-6">
      

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Bruno Carvalho Cagni
            </h1>
            <p className="text-xl sm:text-2xl text-indigo-400 font-medium">
              {t.hero.role}
            </p>
          </div>

          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
            {t.hero.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition shadow-lg shadow-indigo-600/20"
            >
              {t.hero.ctaProjects}
            </a>
            <a
              href="https://github.com/BrunoCarvalhoCagni"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bruno-carvalho-cagni/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="space-y-6 scroll-mt-24">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-indigo-400" />
            <h2 className="text-2xl font-bold text-white tracking-tight">{t.about.title}</h2>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-3">
            <Cpu className="w-5 h-5 text-indigo-400" />
            <h2 className="text-2xl font-bold text-white tracking-tight">{t.projects.title}</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {t.projects.list.map((proj, idx) => (
              <div
                key={idx}
                className="group bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 p-6 sm:p-8 rounded-2xl transition duration-300 relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider">
                      {t.projects.featuredBadge}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition mt-1">
                      {proj.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 pt-2 sm:pt-0">
                      {proj.repoUrl && proj.repoUrl !== "#" && (
                        <a
                          href={proj.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white transition"
                        >
                          <Github className="w-4 h-4" />
                          {t.projects.viewRepo}
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {proj.demoUrl && proj.demoUrl !== "#" && (
                        <a
                          href={proj.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white transition"
                        >
                          {t.projects.liveDemo}
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                  </div>
                </div>

                <p className="text-sm font-medium text-slate-400 mt-1">{proj.subtitle}</p>
                <p className="text-sm text-slate-300 leading-relaxed mt-4">{proj.description}</p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 font-mono text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section id="experience" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-indigo-400" />
            <h2 className="text-2xl font-bold text-white tracking-tight">{t.experience.title}</h2>
          </div>

          <div className="border-l-2 border-slate-800 pl-6 space-y-10 ml-2">
            {t.experience.list.map((exp, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-slate-800 group-hover:bg-indigo-500 transition border-2 border-[#0B0F17]" />
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-lg font-bold text-white">
                    {exp.role} <span className="text-indigo-400">@ {exp.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                </div>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <h2 className="text-2xl font-bold text-white tracking-tight">{t.skills.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.skills.categories.map((cat, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-800 p-5 rounded-xl">
                <h3 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider mb-3">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, iIdx) => (
                    <span
                      key={iIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800/80 text-slate-200 text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT FOOTER */}
        <section id="contact" className="text-center bg-slate-900/30 border border-slate-800 p-10 rounded-2xl space-y-6">
          <h2 className="text-3xl font-bold text-white">{t.contact.title}</h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
            {t.contact.description}
          </p>
          <a
            href="mailto:brunocarvalhocagni@outlook.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition shadow-lg shadow-indigo-600/25"
          >
            <Mail className="w-4 h-4" />
            {t.contact.button}
          </a>
        </section>
      </main>

      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-600 font-mono">
        © {new Date().getFullYear()} • Built with Next.js & GitHub Pages (100% Free Hosting)
      </footer>
    </div>
  );
}