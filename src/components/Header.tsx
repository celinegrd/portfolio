import { useState } from "react";
import { useTranslation } from "react-i18next";
import cv from "../assets/CV-celine-giraud.pdf";
import profilePic from "../assets/images/celine.jpg";
import AboutMe from "./AboutMe";

export default function Header() {
    const [showBio, setShowBio] = useState(false);
    const { t } = useTranslation();

    return (
        <>
            <header className="bg-gradient-to-b from-[#c9bca7] to-[#ede6d1] text-[#1a1714] px-4 pt-32 pb-16 text-center">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
                    <div className="text-center max-w-lg">
                        <h1 className="text-4xl mb-6 font-bold font-title">{t("header.title")}</h1>
                        <p className="text-lg leading-relaxed">
                            {t("header.greeting")} <br />
                            {t("header.description")}
                        </p>
                        <div className="flex gap-4 justify-center">
                            <a
                                href={cv}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-6 bg-[#806c3a] text-white text-lg px-6 py-3 rounded-md hover:bg-[#a38c47] transition duration-300 font-title"
                            >
                                {t("header.cv")}
                            </a>
                            <button
                                onClick={() => setShowBio(true)}
                                className="inline-block mt-6 bg-[#806c3a] text-white text-lg px-6 py-3 rounded-md hover:bg-[#a38c47] transition duration-300 font-title"
                            >
                                {t("header.more")}
                            </button>
                        </div>
                    </div>

                    <img
                        src={profilePic}
                        alt="Photo de Céline"
                        className="w-[200px] h-[200px] object-cover rounded-full border-4 border-[#806c3a] shadow-lg"
                    />
                </div>
            </header>
            {showBio && <AboutMe onClose={() => setShowBio(false)} />}
        </>
    );
}
