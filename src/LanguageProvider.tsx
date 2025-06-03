import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";

type Language = "fr" | "en";

type ResumeData = any; // remplace par une vraie structure si tu veux typer proprement

interface LanguageContextType {
    language: Language;
    resumeData: ResumeData | null;
    setLanguage: (lang: Language) => void;
}

const LANGUAGE_FILES: Record<Language, string> = {
    fr: "/res_primaryLanguage.json",
    en: "/res_secondaryLanguage.json",
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("fr");
    const [resumeData, setResumeData] = useState<ResumeData | null>(null);

    useEffect(() => {
        const loadResume = async () => {
            try {
                const res = await fetch(LANGUAGE_FILES[language]);
                const data = await res.json();
                setResumeData(data);
                document.documentElement.lang = language;
            } catch (err) {
                console.error("Erreur chargement JSON :", err);
            }
        };

        loadResume();
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, resumeData, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Hook custom pour éviter de répéter useContext partout
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage doit être utilisé dans LanguageProvider");
    }
    return context;
};
