import SectionTitle from "@/components/SectionTitle";
import LocationMap from "@/components/LocationMap";
import RevealOnScroll from "@/components/RevealOnScroll";
import { site } from "@/data/site";

export const metadata = {
  title: "Onde Estamos | Churraskim do Akira",
  description:
    "Veja o endereço, mapa, horários e contatos do Churraskim do Akira em Vicente Pires, Brasília.",
  alternates: { canonical: "/onde-estamos" },
};

export default function OndeEstamosPage() {
  return (
    <section className="py-16">
      <RevealOnScroll direction="left">
        <SectionTitle>Onde Estamos</SectionTitle>
      </RevealOnScroll>

      <RevealOnScroll direction="right" delayMs={120} className="mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="min-w-0">
            <LocationMap />
          </div>
          <div className="space-y-4 text-sm sm:text-base">
            <div>
              <strong>Endereço:</strong>
              <br />
              {site.address}
              <br />
              {site.city} - {site.state}, {site.zip}
            </div>
            <div>
              <strong>Horário:</strong>
              <br />
              {site.hours}
            </div>
            <div>
              <strong>Contato:</strong>
              <br />
              <a href={site.whatsapp} className="text-green-400 hover:underline">
                WhatsApp
              </a>
              <br />
              <a href={site.instagram} className="text-pink-400 hover:underline">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
