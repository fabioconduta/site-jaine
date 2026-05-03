import { MotionReveal } from "@/components/MotionReveal";
import { processSteps } from "@/lib/site-data";

export function ProcessSection() {
  return (
    <section className="border-y border-line bg-[#fbf8f2] py-16 sm:py-28">
      <div className="container-shell">
        <div className="grid gap-8 md:grid-cols-[0.82fr_1fr] md:items-end">
          <MotionReveal>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-champagne">
              Processo
            </p>
            <h2 className="editorial-title mt-4 max-w-3xl text-[2.85rem] text-foreground sm:text-6xl">
              Do primeiro encontro à realização do projeto.
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="max-w-xl border-l border-champagne/40 pl-5 text-base leading-8 text-stone md:ml-auto">
              Um percurso objetivo para que o cliente saiba o que acontece em
              cada etapa, com decisões bem conduzidas e acompanhamento
              profissional do início ao fim.
            </p>
          </MotionReveal>
        </div>

        <div className="mt-10 border-y border-line sm:mt-16">
          {processSteps.map((step, index) => (
            <MotionReveal
              key={step.number}
              delay={index * 0.05}
              className="group relative grid gap-4 border-b border-line py-7 last:border-b-0 sm:gap-5 sm:py-8 md:grid-cols-[0.2fr_0.34fr_1fr_0.16fr] md:items-center"
            >
              <span className="font-serif text-5xl leading-none text-champagne transition duration-300 group-hover:text-brown sm:text-7xl">
                {step.number}
              </span>
              <div>
                <p className="mb-2 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-mushroom">
                  Etapa {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-3xl leading-tight text-brown sm:text-4xl">
                  {step.title}
                </h3>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-stone">
                {step.text}
              </p>
              <span
                aria-hidden="true"
                className="hidden h-11 w-11 place-items-center border border-line text-champagne transition duration-300 group-hover:border-champagne group-hover:bg-[#fffaf2] md:grid"
              >
                →
              </span>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
