import {
  instagramUrl,
  serviceRegion,
  whatsappDisplay,
  whatsappUrl,
} from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-[#171716] py-10 text-[#eee5d8]">
      <div className="container-shell">
        <div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-serif text-3xl">
              Jaine Melo Arquitetura & Interiores
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.22em] text-[#b9ab9a]">
              Arquitetura | Interiores | Consultoria
            </p>
            <p className="mt-5 text-sm text-[#938679]">{serviceRegion}</p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#d8c49e] md:justify-end">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Instagram
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              aria-label={`Falar pelo WhatsApp no número ${whatsappDisplay}`}
            >
              {whatsappDisplay}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-[0.78rem] normal-case tracking-normal text-[#8d8073]/85 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Jaine Melo. todos os direitos reservados.</p>
          <p>
            criado por{" "}
            <a
              href="https://vexxo.digital"
              target="_blank"
              rel="noreferrer"
              className="text-[#c8b58f] transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              vexxo.digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
