import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lellis Trattoria - Cardápio Digital",
  description: "Cardápio digital oficial da Lellis Trattoria - Autêntica cozinha italiana",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-950 text-white">
        {children}
        <Footer />
      </body>
    </html>
  );
}
