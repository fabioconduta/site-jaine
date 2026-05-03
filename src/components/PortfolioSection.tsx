import Image from "next/image";
import { MotionReveal } from "@/components/MotionReveal";
import { projects } from "@/lib/site-data";

const curatedProjectIds = [
  "fachada-atemporal",
  "espaco-gourmet",
  "suite-serena",
  "quarto-ludico",
  "studio-beleza-estetica",
  "area-social-integrada",
];

const editorialLayout = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
];

export function PortfolioSection() {
  const curatedProjects = curatedProjectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <section
      id="projetos"
      className="bg-[#191917] py-16 text-[#fffaf2] sm:py-28"
    >
      <div className="container-shell">
        <div className="grid gap-8 md:grid-cols-[0.92fr_1fr] md:items-end">
          <MotionReveal>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-champagne">
              Portfólio
            </p>
            <h2 className="editorial-title mt-4 max-w-3xl text-[2.85rem] sm:text-6xl">
              Projetos que unem forma, função e emoção.
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="max-w-xl border-l border-champagne/40 pl-5 md:ml-auto">
              <p className="text-base leading-8 text-[#cfc3b6]">
                Uma curadoria enxuta de fachadas, interiores, áreas sociais,
                quartos e espaços comerciais, apresentada como recortes de um
                caderno editorial.
              </p>
            </div>
          </MotionReveal>
        </div>

        <div className="mt-10 grid auto-rows-[25rem] grid-cols-1 gap-4 sm:mt-14 md:grid-cols-12 md:auto-rows-[16.5rem] lg:gap-6">
          {curatedProjects.map((project, index) => (
            <MotionReveal
              key={project.id}
              delay={index * 0.05}
              className={`group relative overflow-hidden bg-brown ${editorialLayout[index]}`}
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                loading="lazy"
                quality={84}
                sizes={
                  index === 0
                    ? "(min-width: 768px) 58vw, 100vw"
                    : "(min-width: 768px) 42vw, 100vw"
                }
                className="object-cover object-center transition duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191917]/88 via-[#191917]/18 to-transparent transition duration-500 group-hover:from-[#191917]/76" />
              <div className="absolute inset-4 border border-white/0 transition duration-500 group-hover:inset-5 group-hover:border-white/24" />

              <div className="absolute left-4 top-4 flex items-center gap-3 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[#efe3d0] sm:left-5 sm:top-5 sm:text-[0.62rem] sm:tracking-[0.24em]">
                <span className="h-px w-7 bg-champagne sm:w-8" />
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                <p className="text-[0.62rem] font-semibold uppercase leading-5 tracking-[0.22em] text-[#d7c7ad] sm:text-[0.66rem] sm:tracking-[0.28em]">
                  {project.category}
                </p>
                <h3 className="mt-2 font-serif text-[2rem] leading-none text-white sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-[#e5dacd] opacity-100 transition duration-300 sm:mt-4 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  {project.description}
                </p>
                <a
                  href="#contato"
                  className="mt-4 inline-flex min-h-10 items-center gap-3 text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-champagne opacity-100 transition duration-300 hover:text-white sm:mt-5 sm:text-[0.66rem] sm:tracking-[0.24em] md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
                >
                  Conhecer detalhes
                  <span className="h-px w-8 bg-current" />
                </a>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
