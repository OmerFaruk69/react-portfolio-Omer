import React, { createContext, useContext, useState } from "react";

// Créer le contexte
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("fr"); // "fr" pour français, "en" pour anglais
    const toggleLanguage = () => setLanguage((prev) => (prev === "fr" ? "en" : "fr"));

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte
export const useLanguage = () => useContext(LanguageContext);