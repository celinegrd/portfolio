import React from "react";

type Skill = {
    id: string;
    name: string;
    x: number;
    y: number;
    dependsOn?: string[];
};

const skills: Skill[] = [
    { id: "html", name: "HTML", x: 100, y: 100 },
    { id: "css", name: "CSS", x: 100, y: 300, dependsOn: ["html"] },
    { id: "tailwind", name: "Tailwindcss", x: 200, y: 350, dependsOn: ["css"] },
    { id: "material", name: "Material Tailwind", x: 300, y: 400, dependsOn: ["tailwind"] },
    { id: "js", name: "JavaScript", x: 400, y: 100, dependsOn: ["html"] },
    { id: "react", name: "React", x: 550, y: 200, dependsOn: ["js"] },
    { id: "nest", name: "NestJS", x: 400, y: 250, dependsOn: ["js"] },
    { id: "ts", name: "TypeScript", x: 250, y: 200, dependsOn: ["js"] },
    { id: "prisma", name: "Prisma", x: 550, y: 350, dependsOn: ["nest"] },
];

const SkillsTree: React.FC = () => {
    return (
        <div className="relative w-[650px] h-[500px] mb-10 bg-gradient-to-b from-[#c9bca7] to-[#ede6d1] text-[#1a1714] rounded-2xl overflow-hidden shadow-xl">
            {/* Lignes de connexion */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {skills.flatMap((skill) =>
                    (skill.dependsOn || []).map((dep) => {
                        const from = skills.find((s) => s.id === dep);
                        if (!from) return null;
                        return (
                            <line
                                key={`${dep}-${skill.id}`}
                                x1={from.x}
                                y1={from.y}
                                x2={skill.x}
                                y2={skill.y}
                                stroke="white"
                                strokeWidth="2"
                                strokeDasharray="4"
                            />
                        );
                    })
                )}
            </svg>

            {/* Bulles de compétences */}
            {skills.map((skill) => (
                <div
                    key={skill.id}
                    title={skill.name}
                    className="absolute flex items-center justify-center w-16 h-16 rounded-full bg-[#806c3a] text-white font-bold text-xs text-center leading-tight px-1 shadow-lg hover:scale-110 transition-all cursor-default"
                    style={{
                        left: `${skill.x - 32}px`,
                        top: `${skill.y - 32}px`,
                    }}
                >
                    {skill.name}
                </div>
            ))}
        </div>
    );
};

export default SkillsTree;
