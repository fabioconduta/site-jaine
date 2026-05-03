import { MotionReveal } from "@/components/MotionReveal";
import { whatsappUrl } from "@/lib/site-data";

export function ContactCTA() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-brown py-16 text-[#fffaf2] sm:py-28"
    >
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:72px_72px]" />
      <MotionReveal className="container-shell relative grid gap-10 md:grid-cols-[1fr_0.62fr] md:items-end">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#d8c49e]">
            Contato
          </p>
          <h2 className="editorial-title mt-4 max-w-3xl text-[2.85rem] sm:text-7xl">
            Vamos conversar sobre o seu projeto?
          </h2>
        </div>
        <div>
          <p className="text-base leading-8 text-[#e5dacd]">
            Se você deseja construir, reformar ou transformar um ambiente,
            entre em contato para uma conversa inicial. A partir desse primeiro
            contato, a Jaine entende suas necessidades, seu estilo e o melhor
            caminho para desenvolver o projeto.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-14 w-fit max-w-full items-center justify-center border border-[#d8c49e] bg-[#fffaf2] px-6 text-center text-[0.74rem] font-semibold uppercase leading-5 tracking-[0.18em] !text-[#1f1f1d] shadow-[0_18px_45px_rgba(24,20,17,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:!text-[#1f1f1d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-7 sm:text-[0.78rem] sm:tracking-[0.22em]"
            aria-label="Falar com Jaine Melo pelo WhatsApp"
            style={{ color: "#1f1f1d" }}
          >
            Falar com a Jaine
            <span aria-hidden="true" className="ml-4 h-px w-8 bg-current" />
          </a>
        </div>
      </MotionReveal>
    </section>
  );
}
