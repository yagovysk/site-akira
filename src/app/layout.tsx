import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileQuickActions from "@/components/MobileQuickActions";

export const metadata: Metadata = {
  title: "Churraskim do Akira",
  description: "O melhor churrasco da cidade!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white overflow-x-hidden m-0 p-0">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 pt-20 sm:pt-24 pb-24 sm:pb-0 w-full">
            <div className="max-w-7xl mx-auto px-4 w-full">{children}</div>
          </main>
          <Footer />
          <MobileQuickActions />
        </div>
      </body>
    </html>
  );
}
