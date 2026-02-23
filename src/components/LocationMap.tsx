import { site } from "@/data/site";

export default function LocationMap() {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-yellow-900 w-full h-70 sm:h-80 md:h-95">
      <iframe
        src={site.map}
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa do Churraskim do Akira"
      />
    </div>
  );
}
