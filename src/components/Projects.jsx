export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 bg-slate-900">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-semibold mb-10">Projetos</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-slate-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold">Sistema de Agendamentos</h3>
                        <p className="text-gray-400 mt-2">
                            Aplicação web para agendamento utilizando React, Tailwind e Laravel.
                        </p>
                        <a
                            href="#"
                            className="inline-block mt-4 text-primary hover:underline"
                        >
                            Ver projeto →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
