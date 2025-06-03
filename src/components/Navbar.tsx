import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <>
            <nav
                aria-label="Menu principal"
                className="fixed top-0 left-0 w-full bg-white py-3 text-center shadow-md z-50 font-title text-xl flex items-center"
            >
                <div className="flex-grow flex justify-center space-x-6">
                    <a
                        href="#about"
                        className="text-[#1a1714] no-underline mx-4 font-semibold hover:text-[#806c3a] transition-colors"
                    >
                        {t("navbar.about")}
                    </a>
                    <a
                        href="#skills"
                        className="text-[#1a1714] no-underline mx-4 font-semibold hover:text-[#806c3a] transition-colors"
                    >
                        {t("navbar.skills")}
                    </a>
                    <a
                        href="#projects"
                        className="text-[#1a1714] no-underline mx-4 font-semibold hover:text-[#806c3a] transition-colors"
                    >
                        {t("navbar.projects")}
                    </a>
                    <a
                        href="#contact"
                        className="text-[#1a1714] no-underline mx-4 font-semibold hover:text-[#806c3a] transition-colors"
                    >
                        {t("navbar.contact")}
                    </a>
                </div>
                <div className="ml-auto px-2 bg-[#c7bea4]">
                    <LanguageSwitcher />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
