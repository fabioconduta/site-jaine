import { AboutSection } from "@/components/AboutSection";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import {
  instagramUrl,
  serviceRegion,
  siteConfig,
  whatsappUrl,
} from "@/lib/site-data";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/FOTO%201.png`,
    areaServed: serviceRegion,
    sameAs: [instagramUrl],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: whatsappUrl,
      availableLanguage: "Portuguese",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main id="conteudo">
        <Hero />
        <IntroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ProcessSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
