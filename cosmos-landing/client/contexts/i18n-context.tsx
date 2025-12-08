import React, { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { Language, translations } from "@/lib/i18n";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = useMemo(() => {
    return (key: string): string => {
      const keys = key.split(".");
      let value: any = translations[language];
      
      for (const k of keys) {
        value = value?.[k];
      }
      
      return typeof value === "string" ? value : key;
    };
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, t]
  );

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
