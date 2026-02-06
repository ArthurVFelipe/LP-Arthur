import img13 from "../assets/codioful-formerly-gradienta-bKESVqfxass-unsplash.jpg";
import Button from "./ui/Button.jsx";

export default function Hero() {

    const goToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    const goToContatos = () => {
        document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
        })
    }

    return (
        <section className="relative min-h-screen flex items-center px-6 bg-cover bg-center" style={{ backgroundImage: `url(${img13})` }}>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold">
                    Arthur Felipe
                </h1>

                <p className="mt-6 text-xl text-slate-300 max-w-xl">
                      <span className="text-white font-medium">
                        Desenvolvedor Full-Stack
                      </span>{" "}
                    com foco em frontend, criando interfaces modernas e
                    aplicações robustas com{" "}
                    <span className="text-slate-100">React</span>,{" "}
                    <span className="text-slate-100">Livewire</span> e{" "}
                    <span className="text-slate-100">Laravel</span>.
                </p>


                <div className="mt-8 flex gap-4">
                    <Button variant="primary" onClick={goToProjects}>
                        Ver Projetos
                    </Button>
                    {/*<a*/}
                    {/*    href="#projects"*/}
                    {/*    className="bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-hover)]*/}
                    {/*   px-6 py-3 rounded-md font-medium transition"*/}
                    {/*>*/}
                    {/*    Ver Projetos*/}
                    {/*</a>*/}

                    {/*<a*/}
                    {/*    href="#contact"*/}
                    {/*    className="border border-[color:var(--color-border)]*/}
                    {/*   px-6 py-3 rounded-md hover:bg-slate-900 transition"*/}
                    {/*>*/}
                    {/*    Contato*/}
                    {/*</a>*/}

                    <Button variant="outline" onClick={goToContatos}>
                        Contato
                    </Button>
                </div>
            </div>
        </section>
    );
}
