import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function ExperienceItem({ experience }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="rounded-xl overflow-hidden
      bg-[color:var(--color-surface)]
      border border-[color:var(--color-border)]"
        >
            {/* HEADER */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 py-5
                bg-gradient-to-r
                from-[color:var(--color-gradient-from)]
                to-[color:var(--color-gradient-to)]
                hover:opacity-90 transition
                hover:cursor-pointer duration-200
                "
            >
                <div className="text-left">
                    <p className="font-semibold text-[color:var(--color-text)]">
                        {experience.role} @ {experience.company}
                    </p>
                </div>

                <div className="flex items-center gap-4 text-[color:var(--color-text)]">
          <span className="text-sm opacity-80">
            {experience.period}
          </span>
                    <span className="text-xl font-medium">
            {open ? "−" : "+"}
          </span>
                </div>
            </button>

            {/* CONTENT */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 text-[color:var(--color-muted)] space-y-4">
                            <p>{experience.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {experience.techs.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-sm rounded-full
                                        bg-[color:var(--color-tag-bg)]
                                        text-[color:var(--color-tag-text)]
                                        border border-[color:var(--color-tag-border)]"
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
