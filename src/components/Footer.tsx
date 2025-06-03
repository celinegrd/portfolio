import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="font-title bg-gradient-to-b from-[#c9bca7] to-[#ede6d1] text-[#1a1714] pb-4">
            <p className="text-center text-lg pt-4">{t("footer.copyright")}</p>
            <p className="text-right italic pt-2 pr-4">{t("footer.lastModified")}</p>
        </footer>
    );
}
