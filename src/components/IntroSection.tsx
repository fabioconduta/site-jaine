import Image from "next/image";
import { MotionReveal } from "@/components/MotionReveal";
import { editorialImages } from "@/lib/site-data";

export function IntroSection() {
  return (
    <section className="border-y border-line bg-[#fbf8f2] py-16 sm:py-28">
      <div className="container-shell">
        <div className="grid gap-10 md:grid-cols-[0.72fr_1fr] md:items-start">
          <MotionReveal>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-champagne">
              Posicionamento
            </p>
            <h2 className="editorial-title mt-4 max-w-md text-[2.85rem] text-brown sm:text-6xl">
              Espaços que contam histórias.
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="max-w-3xl text-base leading-8 text-stone sm:text-xl sm:leading-10">
              Cada projeto nasce da escuta, do estilo de vida e dos sonhos de
              quem vai viver aquele ambiente. Mais do que criar espaços bonitos,
              desenvolvemos soluções funcionais, elegantes e atemporais, unindo
              arquitetura, interiores e sensibilidade estética em cada detalhe.
            </p>
          </MotionReveal>
        </div>

        <MotionReveal delay={0.16} className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4">
          {editorialImages.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden bg-sand ${
                index === 1 ? "aspect-[4/5] sm:-mt-8" : "aspect-[5/4]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                quality={82}
                sizes="(min-width: 768px) 30vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          ))}
        </MotionReveal>
      </div>
    </section>
  );
}
