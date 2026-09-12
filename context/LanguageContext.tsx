"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { pt } from "../locales/pt";
import { en } from "../locales/en";

type Language = "pt" | "en";
type Translations = typeof pt;

interface LanguageContextType {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("preferred_lang") as Language;
    if (saved && (saved === "pt" || saved === "en")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("preferred_lang", lang);
  };

  const toggleLanguage = () => {
    const next = language === "pt" ? "en" : "pt";
    handleSetLanguage(next);
  };

  const t = language === "pt" ? pt : en;

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage: handleSetLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};