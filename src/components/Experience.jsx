import { ExperienceItem } from "./ExperienceItem";

const experiences = [
    {
        role: "Desenvolvedor Full-Stack",
        company: "Trashin",
        period: "07/2023 - Presente",
        location: "Brasil",
        description:
            "Atuação no desenvolvimento de aplicações front-end e back-end, com foco em frontend utilizando React e Livewire, além de integração com backend em PHP e Laravel.",
        techs: ["React", "React Native", "Laravel", "Livewire", "jQuery", "PostgreSQL", "Power BI"],
    },
    {
        role: "Estagiário de Desenvolvimento",
        company: "Trashin",
        period: "01/2023 – 07/2023",
        location: "Brasil",
        description:
            "Atuação no desenvolvimento de aplicações front-end e back-end, com foco em frontend utilizando React e Livewire, além de integração com backend em PHP e Laravel.",
        techs: ["React", "React Native", "Laravel", "Livewire", "jQuery", "PostgreSQL", "Power BI"],
    },
    {
        role: "Estagiário de Desenvolvimento",
        company: "Target.IT Serviços em Tecnologia",
        period: "04/2022 – 12/2022",
        location: "Brasil",
        description:
            "Auxiliar no mapeamento de arquivos em PDF para \n" +
            "software de mapeamento de imagens e manutenção de Java e no \n" +
            "mesmo, auxilio nas demais atividades da área. ",
        techs: ["Java", "SQL Server"],
    },
    {
        role: " Estagiário de TI",
        company: "Blanc Hospital",
        period: "08/2021 – 04/2022",
        location: "Brasil",
        description:
            "Auxiliar nos serviços de suporte de TI.",
        techs: [],
    }
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
