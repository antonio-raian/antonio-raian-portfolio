import type { Metadata } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Head";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"], // Define o subconjunto da fonte
  weight: ["300", "400", "500", "600", "700", "800", "900"], // Opcional: escolha os pesos que deseja usar
});

export const metadata: Metadata = {
  title: "Antonio Mendes",
  description: "Portfólio WEB de Antonio Raian Mendes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-pt-16">
      <body className={poppins.className}>
        <main className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
