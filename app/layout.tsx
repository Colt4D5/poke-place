import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from './components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poke TCG Marketplace",
  description: "A place to buy, sell, trade, and share your pokemon cards!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
      	<Navbar />
        <main className="container mx-auto">
      		{children}
        </main>
      </body>
    </html>
  );
}
