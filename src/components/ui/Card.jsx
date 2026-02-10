export function Card({ title, description, href, tags = [] }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
        group relative block rounded-2xl p-6
        bg-[var(--color-surface)]
        border border-[var(--color-border)]
        transition
        hover:border-[var(--color-primary)]
      "
        >
            {/* Glow */}
            <div
                className="
          pointer-events-none absolute inset-0 rounded-2xl
          bg-gradient-to-br
          from-[var(--color-gradient-from)]
          to-[var(--color-gradient-to)]
          opacity-0 blur-xl
          transition
          group-hover:opacity-20
        "
            />

            <div className="relative z-10 space-y-3">
                <h3 className="text-lg font-semibold text-[var(--color-text)]">
                    {title}
                </h3>

                <p className="text-sm text-[var(--color-muted)]">
                    {description}
                </p>

                {/* Tags */}
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="
                  rounded-md px-2 py-1 text-xs
                  bg-[var(--color-tag-bg)]
                  border border-[var(--color-tag-border)]
                  text-[var(--color-tag-text)]
                "
                            >
                {tag}
              </span>
                        ))}
                    </div>
                )}

                {/* CTA */}
                <span
                    className="
            inline-flex items-center gap-1 pt-3 text-sm font-medium
            text-[var(--color-primary)]
            group-hover:underline
          "
                >
          Ver no GitHub →
        </span>
            </div>
        </a>
    );
}
