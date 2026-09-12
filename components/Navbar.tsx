"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F17]/90 backdrop-blur-md border-b border-slate-800/80 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="font-mono text-sm font-bold text-white tracking-wider flex items-center gap-2 shrink-0"
        >
          <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
          portfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-slate-400">
          <a href="#about" className="hover:text-white transition">{t.nav.about}</a>
          <a href="#projects" className="hover:text-white transition">{t.nav.projects}</a>
          <a href="#experience" className="hover:text-white transition">{t.nav.experience}</a>
          <a href="#skills" className="hover:text-white transition">{t.nav.skills}</a>
          <a href="#contact" className="hover:text-white transition">{t.nav.contact}</a>
        </div>

        {/* Right Actions / Language Switcher */}
        <div className="flex items-center">
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-mono text-slate-300 hover:border-indigo-500 hover:text-white transition active:scale-95"
            title="Switch Language"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span className="font-bold uppercase text-white">{language}</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400 text-[11px] uppercase">
              {language === "pt" ? "EN" : "PT"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};