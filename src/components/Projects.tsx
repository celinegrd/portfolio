import { useTranslation } from "react-i18next";
import logoPic from "../assets/images/logo-elabore.png";
import Button from "./ui/Button";

export default function Projects() {
    const { t } = useTranslation();

    return (
        <section id="projects" className="max-w-3xl mx-auto px-4 pt-4">
            <h2 className="text-center text-4xl font-bold mb-8 font-title">
                {t("projects.title")}
            </h2>
            <div className="mx-auto mb-8 p-4 bg-gradient-to-b from-[#c9bca7] to-[#ede6d1] text-[#1a1714] rounded-2xl overflow-hidden shadow-xl">
                <img src={logoPic} alt="Logo LogNest" className="w-[150px] mx-auto" />
                <h3 className="font-bold text-2xl text-center pb-4 font-body">
                    {t("projects.lognest.title")}
                </h3>
                <p className="font-body text-center">
                    {t("projects.lognest.description")}
                    <br />
                </p>
                <p className="py-4 text-center">
                    <span className="font-bold">{t("projects.lognest.tech")}</span> React, NestJS,
                    Material Tailwind, Prisma, MySQL, Docker.
                </p>
                <Button href="#" text={t("projects.lognest.button")} target="_blank" className="" />
            </div>
        </section>
    );
}
