import Image from "next/image";
import { MotionReveal } from "@/components/MotionReveal";

const aboutPrinciples = [
  "Escuta do cliente",
  "Identidade em cada ambiente",
  "Cuidado com detalhes",
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 sm:py-28">
      <div className="container-shell grid gap-16 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <MotionReveal className="relative">
          <div className="relative mx-auto max-w-[560px] pb-10 sm:pb-0 lg:mx-0">
            <div className="absolute -left-3 -top-3 h-full w-full border border-champagne/40 sm:-left-6 sm:-top-6" />
            <div className="relative aspect-[4/5] overflow-hidden bg-sand shadow-[0_24px_80px_rgba(92,70,54,0.14)]">
              <Image
                src="/images/FOTO JAINE.png"
                alt="Retrato de Jaine Melo, arquiteta e designer de interiores"
                fill
                loading="lazy"
                quality={88}
                sizes="(min-width: 1024px) 43vw, 100vw"
                className="object-cover object-[50%_18%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211c18]/22 via-transparent to-transparent" />
            </div>

            <div className="glass-panel absolute bottom-0 left-4 max-w-[17rem] p-4 sm:-bottom-8 sm:left-8 sm:max-w-[18rem] sm:p-5">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-champagne">
                Jaine Melo
              </p>
              <p className="mt-2 font-serif text-2xl leading-none text-brown sm:text-3xl">
                Arquitetura & Interiores
              </p>
            </div>

            <div className="absolute -right-4 top-10 hidden h-72 w-px bg-champagne lg:block" />
            <div className="absolute -right-10 top-12 hidden text-[0.62rem] uppercase tracking-[0.24em] text-stone [writing-mode:vertical-rl] lg:block">
              olhar autoral
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-champagne">
            Sobre Jaine
          </p>
          <h2 className="editorial-title mt-4 max-w-3xl text-[2.85rem] text-brown sm:text-6xl">
            Por trás de cada projeto, um olhar atento aos detalhes.
          </h2>

          <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-stone sm:mt-8 sm:text-lg sm:leading-9">
            <p>
              Jaine Melo é arquiteta e designer de interiores. Seu trabalho
              parte da escuta: entender a rotina, o estilo de vida e aquilo que
              cada cliente deseja sentir ao ocupar um espaço.
            </p>
            <p>
              A partir desse olhar, desenvolve projetos que equilibram
              funcionalidade, proporção, materiais e identidade. Cada escolha é
              pensada com cuidado para que arquitetura e interiores caminhem
              juntos, de forma elegante, acolhedora e coerente com quem vai
              viver o ambiente.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
            {aboutPrinciples.map((item, index) => (
              <div key={item} className="bg-[#f7f2ea] p-5">
                <span className="font-serif text-3xl text-champagne">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.22em] text-brown">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
