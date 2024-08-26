import type { Metadata } from "next";
import { Inter, Gotu, Roboto_Mono,Playfair_Display,Merriweather } from "next/font/google";
import "./globals.css";
import 'animate.css';
import Footer from "./ui/Footer";
import Navbar from "./ui/navbar/Navbar";


const Ro =Roboto_Mono({ weight: "400", subsets: ["latin"] })
const play =Playfair_Display({ weight: "400", subsets: ["latin"] })
const merri = Merriweather({ weight: "400", subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Centro Estetica Anais",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            
      <body className={merri.className}>
        <Navbar/>
        {children}

          <Footer/>

        


        
        </body>
    </html>
  );
}
