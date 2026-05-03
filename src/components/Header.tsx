import { ButtonLink } from "@/components/ButtonLink";
import { navItems, whatsappUrl } from "@/lib/site-data";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-[#faf7f1]/90 backdrop-blur-xl">
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <div className="container-shell flex min-h-16 items-center justify-between gap-4 sm:min-h-20">
        <a href="#inicio" className="group shrink-0" aria-label="Jaine Melo - início">
          <span className="block font-serif text-[1.65rem] leading-none text-foreground sm:text-2xl">
            Jaine Melo
          </span>
          <span className="mt-1 block text-[0.55rem] font-semibold uppercase tracking-[0.24em] text-stone sm:text-[0.62rem] sm:tracking-[0.32em]">
            Arquitetura & Interiores
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-stone lg:flex"
          aria-label="Navegação principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brown"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonLink
          href={whatsappUrl}
          className="hidden px-5 lg:inline-flex"
          aria-label="Solicitar projeto pelo WhatsApp"
        >
          Solicitar projeto
        </ButtonLink>

        <details className="group relative lg:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center border border-line px-4 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-brown marker:hidden transition hover:border-champagne focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brown">
            Menu
          </summary>
          <div className="absolute right-0 top-[calc(100%+0.75rem)] w-[min(82vw,21rem)] border border-line bg-[#faf7f1] p-4 shadow-[0_24px_70px_rgba(33,28,24,0.16)]">
            <nav className="grid divide-y divide-line" aria-label="Navegação mobile">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-stone transition hover:text-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brown"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex min-h-12 items-center justify-center border border-champagne bg-[#efe5d3] px-5 text-center text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#1f1f1d] transition hover:bg-[#fffaf2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brown"
            >
              Solicitar projeto
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
