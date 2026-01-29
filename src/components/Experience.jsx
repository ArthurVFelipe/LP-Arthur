import { ExperienceItem } from "./ExperienceItem";

const experiences = [
    {
        role: "Desenvolvedor Full-Stack",
        company: "Trashin",
        period: "2023 - Presente",
        location: "Brasil",
        description:
            "Atuação no desenvolvimento de aplicações front-end e back-end, com foco em frontend utilizando React e Livewire, além de integração com backend em PHP e Laravel.",
        techs: ["React", "Angular", "Tailwind", "Laravel", "JavaScript"],
    },
    {
        role: "Desenvolvedor Full-Sctack",
        company: "Trashin",
        period: "2023 - Presente",
        location: "Brasil",
        description:
            "Atuação no desenvolvimento de aplicações front-end e back-end, com foco em frontend utilizando React e Livewire, além de integração com backend em PHP e Laravel.",
        techs: ["React", "Angular", "Tailwind", "Laravel", "JavaScript"],
    },
    {
        role: "Desenvolvedor Full-Sctack",
        company: "Trashin",
        period: "2023 - Presente",
        location: "Brasil",
        description:
            "Atuação no desenvolvimento de aplicações front-end e back-end, com foco em frontend utilizando React e Livewire, além de integração com backend em PHP e Laravel.",
        techs: ["React", "Angular", "Tailwind", "Laravel", "JavaScript"],
    },
];


export default function Experience() {
    return (
        <section id="experience" className="py-32 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16">
                    Experiência Profissional
                </h2>

                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} experience={exp} />
                    ))}
                </div>
            </div>
        </section>
    );
}
