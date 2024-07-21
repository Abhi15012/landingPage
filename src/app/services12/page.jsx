import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
  <div className="flex justify-center items-center flex-col md:h-screen">
  <Image  src="/12.jpg" 
          alt="Group SVG" 
          width={550} 
          height={300}
         className="" ></Image>
<Link href={'/'}><button className="border-2 bg-pink-400 rounded-md">Back to home</button></Link>
  </div>
  );
}