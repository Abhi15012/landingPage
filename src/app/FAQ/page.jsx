import Image from "next/image";
import Link from "next/link";
export default function Srt() {
  return (
  <div className="flex justify-center flex-col items-center md:h-screen">
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, delectus!</p>
<Link href={'/'}><button className="border-2 bg-blue-300 rounded-md">Back to home</button></Link>
  </div>
  );
}