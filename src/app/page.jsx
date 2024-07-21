'use client'
import  { CardWithForm } from "../components/form/form";



export default function Page() {

  return (

    <>

    <div>
   
      <div className="large m4 md:mt-20 md:mb-5 md:bg-white bg-purple-400  md:ml-24 w-full md:w-1/2  ">
        <h1 className="font-bold md:text-3xl text-xl   text-black ">
          <strong className="md:text-yellow-500 text-red-600 md:text-4xl">
            User-Centric Excellence :{" "}
          </strong>
          Our App Development services tackles Your Pain Points
        </h1>

        <h4 className="text-sm">
          Experience a Seamless Digital Journey with{" "}
          <strong className="md:text-green-500"> Desun</strong>- Where Every Line
          of Code Resolves Your Challenges and{" "}
          <strong className="md:text-yellow-500">
            Elevates Your App Experience
          </strong>{" "}
          to Unparalleled Heights.
        </h4>

      </div>


      <div className="formbox">

<CardWithForm/>



      </div>
    </div>
    </>
  );
}
