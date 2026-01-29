import img1 from "../assets/jr-korpa-9XngoIpxcEo-unsplash.jpg";
import img2 from "../assets/jr-korpa-stwHyPWNtbI-unsplash.jpg";
import img3 from "../assets/martin-martz-Wa-3T6d0rBo-unsplash.jpg";
import img4 from "../assets/bernd-dittrich-uL1TI7xyLHQ-unsplash.jpg";
import img5 from "../assets/bernd-dittrich-vkH9T8NNNU8-unsplash.jpg";
import img6 from "../assets/chris-ried-ieic5Tq8YMk-unsplash.jpg";
import img7 from "../assets/logan-voss-TlsvyNK5s98-unsplash.jpg";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center px-6 bg-cover bg-center" style={{ backgroundImage: `url(${img2})` }}>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold">
                    Arthur Felipe
                </h1>

                <p className="mt-6 text-xl text-[color:var(--color-muted)] max-w-xl">
                    <span className="text-[color:var(--color-text)] font-medium">
                        Desenvolvedor Full-Stack
                    </span> com foco em frontend, criando interfaces modernas e
                    aplicações robustas com React, Livewire e Laravel.
                </p>


                <div className="mt-8 flex gap-4">
                    <a
                        href="#projects"
                        className="bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-hover)]
                       px-6 py-3 rounded-md font-medium transition"
                    >
                        Ver Projetos
                    </a>

                    <a
                        href="#contact"
                        className="border border-[color:var(--color-border)]
                       px-6 py-3 rounded-md hover:bg-slate-900 transition"
                    >
                        Contato
                    </a>
                </div>
            </div>
        </section>
    );
}
