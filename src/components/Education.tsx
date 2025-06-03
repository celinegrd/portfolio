import type { FC } from "react";
import { useTranslation } from "react-i18next";

const Education: FC = () => {
    const { t } = useTranslation();

    const educationData = t("education.items", { returnObjects: true }) as {
        title: string;
        school: string;
        year: string;
        location?: string;
        optionOne?: string;
        optionTwo?: string;
    }[];

    return (
        <section id="education" className="mx-auto py-10 px-4">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold font-title">{t("education.title")}</h2>
            </div>
            <div className="relative mx-auto">
                {/* Vertical line */}
                <div className="absolute left-1/2 top-0 h-full w-1 bg-[#AE944F] transform -translate-x-1/2 "></div>

                <ul className="space-y-12">
                    {educationData.map((item, index) => (
                        <li
                            key={index}
                            className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-4"
                        >
                            {/* Year */}
                            <div className="text-right pr-4 text-[#AE944F] text-lg font-bold">
                                {item.year}
                            </div>

                            {/* Timeline bullet */}
                            <div className="z-10 w-6 h-6 rounded-full bg-[#AE944F] border-4 border-white shadow-md hover:scale-120 transition-all"></div>

                            {/* Side content */}
                            <div className="text-left pl-4">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm font-semibold text-gray-600">{item.school}</p>
                                {item.location && (
                                    <p className="text-sm italic text-gray-500">{item.location}</p>
                                )}
                                {item.optionOne && (
                                    <p className="text-sm mt-2 text-gray-700">{item.optionOne}</p>
                                )}
                                {item.optionTwo && (
                                    <p className="text-sm text-gray-700">{item.optionTwo}</p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Education;
