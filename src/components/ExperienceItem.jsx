import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function ExperienceItem({ experience }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="rounded-xl overflow-hidden bg-[#1a1625] border border-white/5">
            {/* HEADER */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 py-5
                   bg-gradient-to-r from-purple-700 to-purple-600
                   hover:opacity-90 transition"
            >
                <div className="text-left">
                    <p className="font-semibold">{experience.role} @ {experience.company}</p>
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-sm opacity-80">{experience.period}</span>
                    <span className="text-xl">{open ? "−" : "+"}</span>
                </div>
            </button>

            {/* CONTENT */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 text-[color:var(--color-muted)] space-y-4">
                            <p>{experience.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {experience.techs.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-sm rounded-full
                               bg-purple-500/10 text-purple-300"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
