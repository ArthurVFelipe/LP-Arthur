import useGithubProjects from "../hooks/useGithubProjects.jsx";
import { technologies } from "../utils/technologies";

export default function Projects() {
    const { projects, loading } = useGithubProjects();

    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <section id="projects" className="py-24 px-6 bg-slate-900">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-semibold mb-10">
                    Projetos
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <div
                            key={project.id}
                            className="bg-slate-800 p-6 rounded-lg shadow-lg"
                        >
                            <h3 className="text-xl font-semibold text-white">
                                {project.name}
                            </h3>

                            <p className="text-gray-400 mt-2">
                                {project.description ?? "Sem descrição disponível."}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-4">

                                {/* Linguagem principal */}
                                {project.language &&
                                    technologies[project.language.toLowerCase()] &&
                                    (() => {
                                        const tech =
                                            technologies[project.language.toLowerCase()];

                                        const Icon = tech.icon;

                                        return (
                                            <div className="flex items-center gap-1 bg-slate-700 px-3 py-1 rounded">
                                                <Icon
                                                    className={`text-lg ${tech.color}`}
                                                />

                                                <span className="text-sm text-gray-300">
                                            {project.language}
                                        </span>
                                            </div>
                                        );
                                    })()
                                }


                                {/* Topics do GitHub */}
                                {project.topics?.map(topic => {
                                    const tech =
                                        technologies[topic.toLowerCase()];

                                    if (!tech) return null;

                                    const Icon = tech.icon;

                                    return (
                                        <div
                                            key={topic}
                                            className="flex items-center gap-1 bg-slate-700 px-3 py-1 rounded"
                                        >
                                            <Icon
                                                className={`text-lg ${tech.color}`}
                                            />

                                            <span className="text-sm text-gray-300">
                                        {topic}
                                    </span>
                                        </div>
                                    );
                                })}

                            </div>

                            <a
                                href={project.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-50 inline-block mt-4 text-primary hover:underline cursor-pointer"
                            >
                                Ver projeto →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
