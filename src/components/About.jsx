import AnimatedSection from "./AnimetadeSection.jsx";
import { motion } from "framer-motion"
import { HiMapPin, HiBriefcase, HiCodeBracket } from "react-icons/hi2";

export default function About() {
    const items = [
        {
            label: "Localização",
            value: "Porto Alegre – RS",
            icon: HiMapPin,
        },
        {
            label: "Experiência",
            value: "+2 anos como Desenvolvedor Web",
            icon: HiBriefcase,
        },
        {
            label: "Stack principal",
            value: "React · Livewire · Laravel",
            icon: HiCodeBracket,
        },
    ]

    return (
        <AnimatedSection id="about">
            <section id="about" className="py-28 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

                    {/* Texto */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                            Sobre mim
                        </h2>
                        <p className="text-[color:var(--color-muted)] leading-relaxed">
                            Sou <span className="text-[color:var(--color-text)] font-medium">
                            Desenvolvedor Web
                          </span>, formado em Análise e Desenvolvimento de Sistemas, com experiência
                                        profissional na criação de aplicações modernas e escaláveis.
                                        Atuo principalmente no frontend, desenvolvendo interfaces limpas e
                                        responsivas, e também contribuo no backend utilizando
                                        <span className="text-[color:var(--color-text)] font-medium">
                            {" "}PHP e Laravel
                          </span>.
                                    </p>

                                    <p className="text-[color:var(--color-muted)] leading-relaxed mt-4">
                                        Atualmente trabalho como Desenvolvedor na
                                        <span className="text-[color:var(--color-text)] font-medium">
                            {" "}Trashin
                          </span>, participando da padronização de interfaces, desenvolvimento
                                        de funcionalidades e melhoria contínua da experiência do usuário.
                        </p>
                    </div>

                    {/* Destaques */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="space-y-4"
                    >
                        {items.map((item) => (
                            <div
                                key={item.label}
                                className="group bg-[color:var(--color-surface)]
                                 border border-[color:var(--color-border)]
                                 rounded-xl p-6
                                 hover:border-[color:var(--color-primary)]
                                 transition"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <item.icon
                                        className="text-xl text-[color:var(--color-primary)]
                                         group-hover:scale-110 transition"
                                    />
                                    <p className="text-sm text-[color:var(--color-muted)]">
                                        {item.label}
                                    </p>
                                </div>

                                <p className="font-medium text-base">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </section>
        </AnimatedSection>
    );
}
