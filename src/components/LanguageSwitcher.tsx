import { useTranslation } from "react-i18next";
import flagFR from "../assets/images/france.png";
import flagEN from "../assets/images/royaume-uni.png";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center space-x-4">
            <img
                src={flagFR}
                alt="Français"
                onClick={() => changeLanguage("fr")}
                className={`cursor-pointer transition duration-300 ${
                    currentLang === "fr" ? "brightness-100" : "brightness-50"
                }`}
            />
            <img
                src={flagEN}
                alt="English"
                onClick={() => changeLanguage("en")}
                className={`cursor-pointer transition duration-300 ${
                    currentLang === "en" ? "brightness-100" : "brightness-50"
                }`}
            />
        </div>
    );
}
