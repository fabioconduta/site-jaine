import { MotionReveal } from "@/components/MotionReveal";
import { services } from "@/lib/site-data";

const serviceMarkers = ["Planta", "Atmosfera", "Direção", "Execução"];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-16 sm:py-28">
      <div className="container-shell">
        <div className="grid gap-8 md:grid-cols-[0.92fr_1fr] md:items-end">
          <MotionReveal>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-champagne">
              Serviços
            </p>
            <h2 className="editorial-title mt-4 max-w-3xl text-[2.85rem] text-foreground sm:text-6xl">
              Soluções para transformar ambientes em experiências.
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="max-w-xl border-l border-champagne/40 pl-5 text-base leading-8 text-stone md:ml-auto">
              Da primeira leitura do espaço à materialização dos detalhes, cada
              serviço foi pensado para orientar decisões com clareza, estética e
              segurança técnica.
            </p>
          </MotionReveal>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <MotionReveal
              key={service.title}
              delay={index * 0.06}
              className="group border border-line bg-[#fbf8f2] p-6 transition duration-500 hover:-translate-y-1 hover:border-champagne/60 hover:bg-[#fffaf2] hover:shadow-[0_24px_70px_rgba(92,70,54,0.12)] sm:p-8"
            >
              <div className="flex items-start justify-between gap-6 border-b border-line pb-6">
                <span className="font-serif text-5xl leading-none text-champagne/90 sm:text-6xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="grid min-h-11 place-items-center border border-line px-3 text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-stone transition group-hover:border-champagne group-hover:text-brown sm:h-11 sm:px-2">
                  {serviceMarkers[index]}
                </span>
              </div>

              <div className="mt-8 sm:mt-10">
                <h3 className="font-serif text-[1.85rem] leading-tight text-brown sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-stone">
                  {service.text}
                </p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
