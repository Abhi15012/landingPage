import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Media = () => {
  return (
    <div className="flex justify-center flex-col items-center md:h-screen">
    <Image  src="/1234.jpg" 
            alt="Group SVG" 
            width={250} 
            height={100}
           className="" ></Image>

<Link href={'/'}><button className="border-2 bg-red-400 rounded-md">Back to home</button></Link>
    </div>

  )
}

export default Media


