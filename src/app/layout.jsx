

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/page";

import Image from "next/image";
import './styles.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Filesure",
  description: "Experience a seamless digital journey with Desun, where every line of code resolves your challenges and elevates your app experience to unparalleled heights",
  keywords:'app development, digital solutions, seamless app experience, Desun, user-centric excellence'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
     
      <Image     src="/Group1.svg" 
          alt="Group SVG" 
          width={550} 
          height={300}
         className="float-right  " />
       
    <div className=" "></div>
        <Navbar/> 
        {children}</body>
    </html>
  );
}
