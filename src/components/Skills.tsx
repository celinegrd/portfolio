import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SkillsTree from "./ui/SkillsTree";

export default function Skills() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { t } = useTranslation();

    const toggleDetail = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const skillsData = t("skills.items", { returnObjects: true }) as {
        emoji: string;
        title: string;
        detail: string;
    }[];

    return (
        <section id="skills" className="mx-auto pt-10 px-4">
            <h2 className="text-center text-4xl font-bold mb-8 font-title">{t("skills.title")}</h2>
            <div className="flex items-center justify-center gap-10 flex-wrap">
                <SkillsTree />
                <div className="flex flex-col justify-center max-w-md">
                    <h3 className="font-bold text-2xl pb-4 font-title">{t("skills.subtitle")}</h3>

                    <ul className="space-y-6">
                        {skillsData.map((skill, index) => (
                            <li
                                key={index}
                                className="relative cursor-pointer font-semibold text-lg text-[#1a1714]"
                                onClick={() => toggleDetail(index)}
                            >
                                <div className="flex items-center">
                                    <span>
                                        {skill.emoji} {skill.title}
                                    </span>
                                    <span
                                        className={`inline-block transition-transform duration-300 text-sm ml-2 ${
                                            openIndex === index ? "rotate-90" : ""
                                        }`}
                                    >
                                        <ChevronDoubleRightIcon className="h-4 w-6 text-[#3f351e]" />
                                    </span>
                                </div>

                                {openIndex === index && (
                                    <p className="absolute top-full left-0 w-full bg-[#ede6d1] border border-1 border-[#c9bca7] text-[#3a3324] text-base font-normal rounded-lg p-2 shadow-md z-10 mt-2">
                                        {skill.detail}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
