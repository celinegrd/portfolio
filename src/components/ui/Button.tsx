import React from "react";

type ButtonProps = {
    href: string;
    text: React.ReactNode;
    target?: "_blank" | "_self";
    className?: string;
};

const Button: React.FC<ButtonProps> = ({ href, text, target = "_self", className = "" }) => {
    return (
        <div className="flex justify-center">
            <a
                href={href}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
                className={`bg-[#806c3a] hover:bg-[#a38c47] text-white font-title text-lg no-underline rounded-md px-5 py-2 transition-colors duration-300 ease-in-out inline-block ${className}`}
            >
                {text}
            </a>
        </div>
    );
};

export default Button;
