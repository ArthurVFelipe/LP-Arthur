import Button from "./ui/Button.jsx";

export default function Contact() {
    const goToContact = () => {
        window.location.href =
            "mailto:arthur_avf.br@hotmail.com?subject=Contato pelo site";
    }
    return (
        <section id="contact" className="py-24 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6">Vamos conversar?</h2>

                <p className="text-gray-400 mb-8">
                    Estou aberto a oportunidades e projetos.
                </p>

                <Button variant="primary" onClick={goToContact}>
                    Entrar em contato
                </Button>
            </div>
        </section>
    )
}
