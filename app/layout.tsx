import type { Metadata } from "next";
import { Inter, Gotu, Roboto_Mono, Playfair_Display, Merriweather,Urbanist,Alegreya } from "next/font/google";
import "./globals.css";
import 'animate.css';
import Footer from "./ui/Footer";
import Navbar from "./ui/navbar/Navbar";
import { Analytics } from "@vercel/analytics/react"


const Ro = Roboto_Mono({ weight: "400", subsets: ["latin"] })
const play = Playfair_Display({ weight: "400", subsets: ["latin"] })
const merri = Merriweather({ weight: "400", subsets: ["latin"] })
const ale = Alegreya({weight:"600",subsets:["latin"]})

export const metadata: Metadata = {
  title: "Salón AJ piel genuina cuidado de tu piel",
  description: "",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <link
          rel="icon"
          href="/logoxxx.png"
          type="image/png"
          sizes=""
        />

      </head>

      <body className={ale.className}>
        <Navbar />
        {children}
        <Analytics/>

        <Footer />





      </body>
    </html>
  );
}
