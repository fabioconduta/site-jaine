import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");
  const styles = {
    primary:
      "border-champagne bg-[#efe5d3] text-[#1f1f1d] shadow-[0_12px_32px_rgba(31,31,29,0.08)] hover:bg-[#fffaf2] hover:border-brown focus-visible:outline-brown",
    secondary:
      "border-line bg-transparent text-foreground hover:border-champagne hover:bg-[#fffaf2]/60 hover:text-brown focus-visible:outline-brown",
    light:
      "border-[#d7c7ad] bg-[#fffaf2] text-[#1f1f1d] hover:bg-white focus-visible:outline-white",
  };

  const linkClassName = `inline-flex min-h-12 items-center justify-center border px-6 text-center text-[0.76rem] font-semibold uppercase leading-5 tracking-[0.18em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-[0.78rem] sm:tracking-[0.22em] ${styles[variant]} ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        target={props.target ?? "_blank"}
        rel={props.rel ?? "noreferrer"}
        {...props}
        className={linkClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...props} className={linkClassName}>
      {children}
    </Link>
  );
}
