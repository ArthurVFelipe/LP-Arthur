import {
    SiReact,
    SiAngular,
    SiVuedotjs,
    SiJavascript,
    SiTailwindcss,
    SiBootstrap,
    SiPhp,
    SiLaravel,
    SiMysql,
    SiPostgresql,
} from "react-icons/si"

import { motion } from "framer-motion"


const skills = [
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "React Native", icon: SiReact, color: "text-cyan-400" },
    { name: "Angular", icon: SiAngular, color: "text-red-500" },
    // { name: "Vue.js", icon: SiVuedotjs, color: "text-green-400" },
    { name: "Livewire", icon: SiLaravel, color: "text-red-400" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
    { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
    { name: "Laravel", icon: SiLaravel, color: "text-red-400" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-300" },
]

export default function Skills() {
    return (
        <section id="skills" className="py-28 px-6 bg-slate-900">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-semibold mb-12">Tecnologias</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="group flex flex-col items-center justify-center
                               bg-slate-800/70 border border-white/10 rounded-xl
                               p-6 hover:bg-slate-800 transition
                               hover:border-[color:var(--color-primary)]
                               "
                            >
                                    <skill.icon
                                        className={`text-4xl mb-3 ${skill.color}
                                        group-hover:scale-110 transition`}
                                    />
                            <span className="text-sm font-medium text-slate-200">
                              {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
