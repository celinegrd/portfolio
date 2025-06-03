import React from "react";
import { useTranslation } from "react-i18next";
import brainPic from "../assets/images/brain.png";
import cookPic from "../assets/images/cook.png";
import paintPic from "../assets/images/paint.png";
import playPic from "../assets/images/play.png";

interface AboutMeProps {
    onClose: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ onClose }) => {
    const { t } = useTranslation();

    return (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center px-4">
            <div className="bg-[#f9f5ec] text-[#1a1714] text-justify max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl p-8 relative">
                <h2 className="text-3xl font-title mb-6">{t("aboutMe.title")}</h2>

                <div className="mb-4 flex items-center justify-between">
                    <p className="flex-1">{t("aboutMe.intro")}</p>
                    <div className="flex gap-3 items-center">
                        <img src={cookPic} alt="cook picture" className="h-13" />
                        <img src={playPic} alt="play picture" className="h-9" />
                    </div>
                </div>

                <p className="mb-4">{t("aboutMe.origin")}</p>

                <p className="mb-4">{t("aboutMe.experience")}</p>

                <p className="mb-4" dangerouslySetInnerHTML={{ __html: t("aboutMe.sharing") }} />

                <p className="mb-4">{t("aboutMe.reconversion")}</p>

                <div className="mb-4 flex gap-4 items-center px-6">
                    <img src={paintPic} alt="paint picture" className="h-12" />
                    <p>{t("aboutMe.creativity")}</p>
                </div>

                <div className="mb-4 flex gap-4 items-center px-6">
                    <img src={brainPic} alt="brain picture" className="h-10" />
                    <p>{t("aboutMe.logic")}</p>
                </div>

                <p className="mb-4 text-center px-6 font-title text-lg py-4">
                    {t("aboutMe.conclusion")}
                </p>

                <p>{t("aboutMe.closing")}</p>
                <div className="mt-8 text-center">
                    <button
                        onClick={onClose}
                        className="bg-[#806c3a] text-white px-6 py-3 rounded-md hover:bg-[#a38c47] transition font-title"
                    >
                        {t("aboutMe.closeBtn")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
