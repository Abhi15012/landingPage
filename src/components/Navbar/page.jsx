"use client";
import { IoMailOutline } from "react-icons/io5";
import React from "react";
import { BsPhone } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../ui/menubar";

export default function NavBar() {
  return (
    <div className="pages flex flex-col md:flex-row justify-between items-center h-auto z-10 md:ml-24 ">
    
   
      <Menubar className="flex flex-col md:flex-row md:items-center justify-start items-start">
    <div className="classhel "> </div>

        <MenubarMenu className="flex flex-col md:flex-row">
 <MenubarTrigger className="py-0 md:py-0 "><Link href={"/services12"} className="focus:text-blue-700">Services</Link> </MenubarTrigger> 
          <MenubarTrigger className="py-2 md:py-0 md:px-4 ">     <Link href="/Media" className="focus:text-blue-700">
            Media
          </Link></MenubarTrigger>
          <MenubarTrigger className="py-2 md:py-0 md:px-4 "><Link href={"/Cases"} className="focus:text-blue-700">Cases</Link></MenubarTrigger>
          <MenubarTrigger className="py-2 md:py-0 md:px-4 "><Link href={"/FAQ"} className="focus:text-blue-700">FAQ</Link></MenubarTrigger>
          <MenubarTrigger className="py-2 md:py-0 md:px-4 "><Link href={"/"} className="focus:text-blue-700">Contact</Link></MenubarTrigger>
        </MenubarMenu>
        <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
          <div className="flex items-center mb-2 md:mb-0 mr-8">
            <span className="text-green-500">
              <BsPhone />
            </span>
            <span className="text-green-600 ml-2 text-sm font-light">+910000000000</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500">
              <IoMailOutline />
            </span>
            <span className="text-green-600 ml-5 text-md font-light">demo@gmail.com</span>
          </div>
        </div>
      </Menubar>
    </div>
  );
}
