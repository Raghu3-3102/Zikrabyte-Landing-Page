import React from "react";
import Image from "next/image";
import quote from "../../../../public/assets/client_img/qoute.png";
import star from "../../../../public/assets/client_img/sta.png";

export const Review = () => {
  return (
    <>
      <div className="flex flex-wrap items-center mt-24 mb-0 mx-0 pr-10">
        <div className="w-full md:w-6/12 p-6">
          <p className="text-base font-semibold uppercase">Clients Reviews</p>
          <h1 className="text-7xl font-bold mt-8 leading-tight">
            What they say
          </h1>
        </div>

        <div className="flex flex-row w-full md:w-6/12 gap-16 pt-10 pb-10 border-2 border-solid border-gray-300">
          <div className="md:w-4/12 pl-10">
            <p className="text-base font-bold leading-relaxed pb-36">
              “Level of research and execution was very impressive.”
            </p>
            <p className=" font-light text-gray-500 pb-24">
              Henry James, Founder, Tech Health, UK
            </p>
            <p className="text-base font-bold leading-relaxed pb-16">
              “We were impressed with UX/UI’s organization skills — how they set
              their timelines and made estimates.”
            </p>
            <p className="">Brian Truong, PM, PYM, USA</p>
          </div>

          <div className="md:w-1/12">
            <Image
              src={quote}
              alt="quote"
              style={{ height: "50px", width: "100px" }}
              className=" mb-80"
            />
            <Image
              src={quote}
              alt="quote"
              style={{ height: "50px", width: "100px" }}
              className=""
            />
          </div>

          <div className="md:w-3/12">
            <p className="text-base font-bold leading-relaxed break-words pb-36">
              “Our bounce back rates have fallen since the redesign and
              rebranding.”
            </p>
            <p className=" font-light text-gray-500 pb-16">
              Anonymous, Media start-up, UK
            </p>
            <div className="flex items-end pt-3">
              <p className="text-4xl font-normal">5.0</p>
              <p className="text-base ml-2">of 5.0</p>
            </div>

            <div className="ml-2 flex ">
              <Image src={star} alt="star" height={20} width={20} />
              <Image src={star} alt="star" height={20} width={20} />
              <Image src={star} alt="star" height={20} width={20} />
              <Image src={star} alt="star" height={20} width={20} />
              <Image src={star} alt="star" height={20} width={20} />
            </div>
            <div className="mt-20">
              <p className="text-base font-light text-gray-500">Quality </p>
              <p className="text-base font-light text-gray-500">Schedule</p>
              <p className="text-base font-light text-gray-500">Cost</p>
              <p className="text-base font-light text-gray-500">
                Willing to refer
              </p>
            </div>
          </div>

          <div className="md:w-1/12">
            <Image
              src={quote}
              alt="quote"
              style={{ height: "50px", width: "100px" }}
              className="mb-96 "
            />
            <div className="pt-20">
              <p className="text-base font-semibold">5.0 </p>
              <p className="text-base font-semibold">5.0</p>
              <p className="text-base font-semibold">5.0</p>
              <p className="text-base font-semibold">5.0</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex pr-10">
        <div className="flex flex-row w-full pl-20 pt-5 md:w-6/12 border-2 border-b-0 border-r-0 border-solid border-gray-300">
          <div>
            <div className="flex items-end  pr-32">
              <p className="text-4xl font-normal">5.0</p>
              <p className="text-base ml-2">of 5.0</p>
            </div>

            <div className="flex pt-4">
              <Image src={star} alt="star" height={20} width={20} />
              <Image src={star} alt="star" height={20} width={20} />
              <Image src={star} alt="star" height={20} width={20} />
              <Image src={star} alt="star" height={20} width={20} />
              <Image src={star} alt="star" height={20} width={20} />
            </div>
          </div>
          <div className="md:w-4/12 ">
            <p className="text-base font-bold leading-8 pb-16 pl-12">
              “I was impressed by the accuracy in everything. The guys are
              working fast and very organized.”
            </p>
          </div>
          <div>
            <Image
              src={quote}
              alt="quote"
              style={{ height: "70px", width: "70px" }}
              className="ml-14"
            />
          </div>
        </div>

        <div className=" flex items-center w-full md:w-6/12 border-2 border-b-0 border-solid border-gray-300">
          <p className="text-base font-bold leading-relaxed md:w-10/12 px-10">
            “UXIS has a solid understanding of both development and design,
            however, which allows them to create designs that are easy to
            produce, as well as reuse and adjust.”
          </p>
          <div>
            <Image
              src={quote}
              alt="quote"
              style={{ height: "70px", width: "70px" }}
              className=""
            />
          </div>
        </div>
      </div>

      <div className="flex pr-10">
        <div className="md:w-5/12">
          <div className="flex items-end  pl-20 pb-20">
            <div className="pr-28">
              <p className="text-base font-light text-gray-500 pt-3">
                Quality{" "}
              </p>
              <p className="text-base font-light text-gray-500 pt-3">
                Schedule
              </p>
              <p className="text-base font-light text-gray-500 pt-3">Cost</p>
              <p className="text-base font-light text-gray-500 pt-3">
                Willing to refer
              </p>
            </div>
            <div className="pr-16">
              <p className="text-base font-semibold pt-3">5.0 </p>
              <p className="text-base font-semibold pt-3">5.0</p>
              <p className="text-base font-semibold pt-3">5.0</p>
              <p className="text-base font-semibold pt-3">5.0</p>
            </div>
            <p className="md:w-3/12 font-light text-gray-500">
              Gena Moldovan, IT Director, USA
            </p>
          </div>
          <p className=" px-20 pb-20 font-bold text-base">
            “I have six years of experience working in software teams as a
            product manager and Oleksandr (CEO of UXIS) is one of the most
            impressive UX designers I've worked with.”
          </p>

          <p className=" px-20 text-base font-light text-gray-500">
            Tulha Patel,
            <br /> Founder, Kwala, UK
          </p>
        </div>

        <div className="flex items-center md:w-7/12 border-2">
          <div className="ml-10 mr-20">
            <Image
              src={quote}
              alt="quote"
              style={{ height: "50px", width: "100px" }}
              className=""
            />
          </div>

          <div className="py-10">
            <p className="text-base font-light text-gray-500 ">
              Theo Inglis,
              <br />
              Co-Founder, Housecure, UK
            </p>
            <div className="py-20">
              <div className="flex items-end  pr-32">
                <p className="text-4xl font-normal">5.0</p>
                <p className="text-base ml-2">of 5.0</p>
              </div>
              <div className="flex pt-4">
                <Image src={star} alt="star" height={20} width={20} />
                <Image src={star} alt="star" height={20} width={20} />
                <Image src={star} alt="star" height={20} width={20} />
                <Image src={star} alt="star" height={20} width={20} />
                <Image src={star} alt="star" height={20} width={20} />
              </div>
            </div>
            <div className="">
              <p className="text-base font-light text-gray-500 pt-2">
                Quality{" "}
              </p>
              <p className="text-base font-light text-gray-500 pt-2">
                Schedule
              </p>
              <p className="text-base font-light text-gray-500 pt-2">Cost</p>
              <p className="text-base font-light text-gray-500 pt-2">
                Willing to refer
              </p>
            </div>
          </div>

          <div className="pt-72 pl-10 pr-20">
            <p className="text-base font-semibold pt-2">5.0 </p>
            <p className="text-base font-semibold pt-2">5.0</p>
            <p className="text-base font-semibold pt-2">5.0</p>
            <p className="text-base font-semibold pt-2">5.0</p>
          </div>

          <div className="flex flex-col ">
            <p className="font-bold md:w-9/12 py-32">
              “Oleksandr was very easy to communicate with and everything was
              delivered on time.”
            </p>
            <p className="text-base font-light text-gray-500 ">
              Harry James,
              <br />
              Co-Founder, Ted's Health, UK
            </p>
          </div>

          <div className="mx-10">
            <Image
              src={quote}
              alt="quote"
              style={{ height: "50px", width: "100px" }}
              className=""
            />
          </div>
        </div>
      </div>

      <div className="pr-10 pb-20">
        <div className=" w-full border-2 border-solid border-t-0 border-gray-300">
          <div className="flex pr-36 pl-16 pt-10">
            <p className="font-bold w-60 text-sm ">
              “High-level of details in every phase. They really cared.”
            </p>
            <Image
              src={quote}
              alt="quote"
              style={{ height: "50px", width: "40px" }}
              className=" "
            />
            <p className="font-bold w-6/12 text-sm px-20">
              “We never lost track of where we are during the design stages.
              UXIS has shown tremendous self-motivation and dedication to our
              needs. They always willing to go extra mile for us.”
            </p>
            <Image
              src={quote}
              alt="quote"
              style={{ height: "50px", width: "40px" }}
              className=""
            />
          </div>
          <div className="flex justify-end pr-10">
            <button className="border-2 border-black font-bold rounded-full p-4">Review all on Clutch</button>
          </div>
          <div className="flex">
            <p className="text-sm font-light p-16">
            Danny Trichter,<br />
            CEO, Accessibility Checker, Israe.
            </p>
            <p className="text-sm font-light p-16">
            Kanan Hajizada,<br />
            Managing Partner, Fintech Startup, Azerbaijan
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
