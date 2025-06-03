import { useTranslation } from "react-i18next";
import logoEmail from "../assets/images/email.png";
import logoLinkedin from "../assets/images/linkedin.png";

export default function Contact() {
    const { t } = useTranslation();

    return (
        <section id="skills" className="max-w-3xl mx-auto px-4 pt-4">
            <h2 className="text-center text-4xl font-bold mb-4 font-title">{t("contact.title")}</h2>
            <p className="text-center mb-4">{t("contact.text")}</p>
            <div className="flex gap-4 items-center justify-center mb-8">
                <a
                    href="mailto:celine.giraud31@hotmail.fr"
                    title="Envoyer un email"
                    className="w-[40px] transition-transform duration-300 hover:scale-120 cursor-pointer"
                >
                    <img src={logoEmail} alt="Email" />
                </a>
                <a
                    href="https://www.linkedin.com/in/c%C3%A9line-giraud-9128a7107/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Profil LinkedIn"
                    className="w-[40px] transition-transform duration-300 hover:scale-120 cursor-pointer"
                >
                    <img src={logoLinkedin} alt="LinkedIn" />
                </a>
            </div>
        </section>
    );
}
