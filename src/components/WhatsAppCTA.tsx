import { site } from "@/data/site";

export default function WhatsAppCTA() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener"
      className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 rounded-xl shadow-lg text-lg transition-all w-full sm:w-auto text-center"
    >
      Fale conosco no WhatsApp
    </a>
  );
}
