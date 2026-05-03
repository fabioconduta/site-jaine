import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { MotionReveal } from "@/components/MotionReveal";
import { whatsappUrl } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden pt-24 sm:pt-32 lg:min-h-screen lg:pt-0"
    >
      <div className="pointer-events-none absolute inset-x-0 top-16 h-px bg-line sm:top-20" />
      <div className="pointer-events-none absolute left-[7vw] top-0 hidden h-full w-px bg-line/70 xl:block" />

      <div className="container-shell grid gap-9 pb-16 sm:gap-10 sm:pb-20 lg:min-h-screen lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:pb-10">
        <MotionReveal className="relative z-10 max-w-3xl pt-4 sm:pt-8 lg:pt-24">
          <div className="mb-6 flex items-center gap-4 text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-champagne sm:mb-8 sm:tracking-[0.32em]">
            <span className="h-px w-9 bg-champagne sm:w-12" />
            <span>Arquitetura autoral</span>
          </div>

          <div className="mb-5 flex items-center gap-4 border-y border-line py-3 text-[0.62rem] uppercase leading-5 tracking-[0.18em] text-stone sm:mb-6 sm:w-max sm:gap-5 sm:pr-8 sm:text-[0.68rem] sm:tracking-[0.26em]">
            <span className="font-serif text-2xl leading-none text-brown">JM</span>
            <span>Residencial · Comercial · Interiores</span>
          </div>

          <h1 className="editorial-title text-balance text-[3rem] text-foreground sm:text-7xl lg:text-[5.9rem] xl:text-[6.65rem]">
            Arquitetura e interiores para viver com beleza, conforto e
            propósito.
          </h1>

          <div className="mt-7 grid gap-7 border-l border-champagne/50 pl-4 sm:mt-8 sm:max-w-2xl sm:grid-cols-[1fr_auto] sm:items-end sm:pl-5">
            <p className="text-[0.98rem] leading-8 text-stone sm:text-lg">
              Projetos residenciais e comerciais pensados para traduzir
              personalidade, valorizar espaços e transformar ambientes em
              experiências únicas.
            </p>
            <p className="hidden max-w-[9rem] text-[0.68rem] uppercase leading-5 tracking-[0.22em] text-mushroom sm:block">
              Escuta, proporção e sensibilidade estética.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <ButtonLink
              href={whatsappUrl}
              className="min-h-14 w-full px-7 sm:w-auto"
            >
              Solicitar um projeto
            </ButtonLink>
            <ButtonLink
              href="#projetos"
              variant="secondary"
              className="min-h-14 w-full px-7 sm:w-auto"
            >
              Conhecer portfólio
            </ButtonLink>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.12} className="relative">
          <div className="relative ml-auto grid max-w-[680px] grid-cols-[1fr_2.75rem] gap-2 sm:grid-cols-[3.5rem_1fr_4.5rem] sm:gap-3">
            <div className="hidden items-end justify-center border border-line pb-5 text-[0.62rem] uppercase tracking-[0.24em] text-stone [writing-mode:vertical-rl] sm:flex">
              Edição 01
            </div>

            <div className="relative aspect-[4/5] overflow-hidden bg-sand shadow-[0_24px_80px_rgba(33,28,24,0.16)]">
              <Image
                src="/images/FOTO 1.png"
                alt="Residência contemporânea com composição sofisticada e detalhes de arquitetura"
                fill
                priority
                quality={90}
                sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 54vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211c18]/30 via-transparent to-transparent" />
              <div className="absolute left-3 top-3 border border-white/40 bg-[#211c18]/20 px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:left-5 sm:top-5 sm:px-4 sm:py-3 sm:text-[0.62rem] sm:tracking-[0.24em]">
                Alto padrão
              </div>
            </div>

            <div className="flex flex-col justify-between border-y border-line py-3 text-right sm:py-4">
              <span className="font-serif text-3xl leading-none text-champagne sm:text-5xl">
                01
              </span>
              <span className="text-[0.56rem] uppercase leading-5 tracking-[0.18em] text-stone [writing-mode:vertical-rl] sm:text-[0.62rem] sm:tracking-[0.22em]">
                Beleza funcional
              </span>
            </div>
          </div>

          <div className="glass-panel relative -mt-7 ml-3 max-w-[18rem] p-4 sm:absolute sm:-bottom-8 sm:left-16 sm:ml-0 sm:max-w-[19rem] sm:p-5">
            <p className="font-serif text-2xl text-brown sm:text-3xl">
              Espaços com alma
            </p>
            <p className="mt-2 text-sm leading-6 text-stone">
              Ambientes criados com proporção, textura e presença para uma
              experiência de morar mais sensível.
            </p>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
