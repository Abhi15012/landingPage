import Image from "next/image";
import Link from "next/link";

export default function ab() {
  return (
  <div className="flex justify-center  flex-col items-center md:h-screen">
  <Image  src="/abhi.jpg" 
          alt="Group SVG" 
          width={350} 
          height={100}
         className="" ></Image>
         <Link href={'/'}><button className="border-2 bg-yellow-300 rounded-md">Back to home</button></Link>
  </div>
  );
}