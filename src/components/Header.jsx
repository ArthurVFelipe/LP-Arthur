const links = [
    { id: "about", label: "Sobre" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projetos" },
    { id: "contact", label: "Contato" },
];

export default function Header() {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <header className="fixed top-0 w-full z-50
                       bg-[color:var(--color-bg)]/80 backdrop-blur
                       border-b border-[color:var(--color-border)]">
            <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <span className="font-semibold">Arthur Felipe</span>

                <ul className="flex gap-6 text-sm">
                    {links.map((link) => (
                        <li
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className="cursor-pointer text-[color:var(--color-muted)]
                         hover:text-[color:var(--color-text)] transition"
                        >
                            {link.label}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
