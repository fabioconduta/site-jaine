import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Arquitetura e Interiores`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Jaine Melo",
    "arquitetura residencial",
    "arquitetura comercial",
    "design de interiores",
    "projeto arquitetônico",
    "consultoria de ambientes",
    "acompanhamento de obra",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Arquitetura e Interiores`,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/FOTO 1.png",
        width: 1200,
        height: 1200,
        alt: "Projeto residencial contemporâneo assinado por Jaine Melo Arquitetura & Interiores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Arquitetura e Interiores`,
    description: siteConfig.description,
    images: ["/images/FOTO 1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f2ea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
