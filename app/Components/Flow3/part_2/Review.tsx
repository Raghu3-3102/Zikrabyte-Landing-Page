import React from "react";
import Image from "next/image";
import quote from "../../../../public/assets/client_img/qoute.png";
import star from "../../../../public/assets/client_img/sta.png";
import right from "../../../../public/assets/client_img/next.png";

export const Review = () => {
  return (
    <>
      <div className="flex flex-wrap w-full items-center mt-24 mb-0 mx-0 pr-0 md:pl-10 lg:pl-10 md:pr-10">
        <div className="w-full lg:w-6/12 pl-5 md:pl-7 p-7 pt-0 lg:pt-7 lg:pl-10">
          <p className="text-xs md:text-base font-semibold uppercase">
            Clients Reviews
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold mt-3 md:mt-8 leading-tight">
            What they say
          </h1>
        </div>

        <div className="flex flex-row w-full gap-2 lg:w-6/12 md:gap-16 pt-10 pb-10 border-2 border-solid border-gray-300">
          <div className="w-6/12 md:w-4/12 pl-5 md:pl-7  lg:pl-10">
            <p className="text-xs md:text-base font-bold leading-relaxed pb-24 lg:pb-36">
              “Level of research and execution was very impressive.”
            </p>
            <p className="text-sm md:text-base font-light text-gray-500 pb-24">
              Henry James, Founder, Tech Health, UK
            </p>
            <p className="text-xs w-auto md:text-base font-bold leading-relaxed pb-16">
              “We were impressed with UX/UI’s organization skills — how they set
              their timelines and made estimates.”
            </p>
            <p className="">Brian Truong, PM, PYM, USA</p>
          </div>

          <div className="w-1/12">
            <Image
              src={quote}
              alt="quote"
              style={{ height: "50px", width: "100px" }}
              className=" mb-60 w-5 md:w-14"
            />
            <Image
              src={quote}
              alt="quote"
              style={{ height: "50px", width: "100px" }}
              className=""
            />
          </div>

          <div className="w-4/12 md:w-3/12">
            <p className="text-sm md:text-base font-bold leading-relaxed break-words pb-16 lg:pb-36">
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
            <div className="mt-16 md:mt-24">
              <p className="text-base font-light text-gray-500">Quality </p>
              <p className="text-base font-light text-gray-500">Schedule</p>
              <p className="text-base font-light text-gray-500">Cost</p>
              <p className="text-base font-light text-gray-500">
                Willing to refer
              </p>
            </div>
          </div>

          <div className="w-1/12">
            <Image
              src={quote}
              alt="quote"
              style={{ height: "50px", width: "100px" }}
              className="mb-96 "
            />
            <div className="pt-0 lg:pt-20">
              <p className="text-base font-semibold">5.0 </p>
              <p className="text-base font-semibold">5.0</p>
              <p className="text-base font-semibold">5.0</p>
              <p className="text-base font-semibold">5.0</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex-row pr-0 md:flex md:px-10">
        <div className="flex flex-row w-full pl-5 md:pl-7 lg:pl-10 pt-5 lg:w-6/12 border-2 border-b-0 md:border-2 lg:border-b-0 md:border-r-0 border-solid border-gray-300">
          <div>
            <div className="flex items-end pr-0 lg:pr-20">
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
          <div className="w-1/2 lg:w-1/2 ">
            <p className="text-xs leading-5 md:text-sm md:leading-7 lg:text-base font-bold lg:leading-8 md:pb-5 lg:pb-16 pl-6 lg:pl-12">
              “I was impressed by the accuracy in everything. The guys are
              working fast and very organized.”
            </p>
          </div>
          <div>
            <Image
              src={quote}
              alt="quote"
              style={{ height: "70px", width: "70px" }}
              className="ml-2 lg:ml-14 w-10 lg:w-20"
            />
          </div>
        </div>

        <div className=" flex items-center w-full lg:w-6/12 border-2 lg:border-b-0 border-solid border-gray-300">
          <p className="text-sm lg:text-base font-bold leading-relaxed w-10/12 pt-5 md:pt-0 px-5 md:pl-10 md:px-10">
            “UXIS has a solid understanding of both development and design,
            however, which allows them to create designs that are easy to
            produce, as well as reuse and adjust.”
          </p>
          <div>
            <Image
              src={quote}
              alt="quote"
              style={{ height: "70px", width: "70px" }}
              className="w-10 lg:w-20"
            />
          </div>
        </div>
      </div>

      <div className="flex- lg:flex pr-0 md:px-10">
        <div className=" flex flex-col md:flex-row lg:flex-col w-full md:w-full lg:w-5/12 border-2">
          <div className="flex items-end w-1/2 lg:w-auto pl-5 pt-5 lg:pt-0 md:pl-7 pb-5 lg:pl-10 lg:pb-20">
            <div className="pr-10 md:pr-10">
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
            <div className="pr-10 md:pr-16">
              <p className="text-base font-semibold pt-3">5.0 </p>
              <p className="text-base font-semibold pt-3">5.0</p>
              <p className="text-base font-semibold pt-3">5.0</p>
              <p className="text-base font-semibold pt-3">5.0</p>
            </div>
            <p className="w-4/12 md:w-3/12 font-light text-gray-500">
              Gena Moldovan, IT Director, USA
            </p>
          </div>
          <div className=" lg:p-0 md:w-1/2 lg:w-auto md:pt-5 md:pb-0 lg:pt-0 lg:pb-0 md:text-right lg:text-left">
            <p className="px-5 pl-5 pb-3 md:pl-0 lg:pl-10 lg:px-20 lg:pb-20 font-bold text-base">
              “I have six years of experience working in software teams as a
              product manager and Oleksandr (CEO of UXIS) is one of the most
              impressive UX designers Ive worked with.”
            </p>

            <p className="pl-5 pb-5 md:pr-5 lg:pr-0 md:pl-0 lg:pl-10 lg:px-20 lg:pb-0 text-base font-light text-gray-500">
              Tulha Patel,
              <br /> Founder, Kwala, UK
            </p>
          </div>
        </div>

        <div className="flex items-center w-full lg:w-7/12 border-2">
          <div className="md-0 mr-0 ml-0 lg:ml-10 lg:mr-20">
            <Image
              src={quote}
              alt="quote"
              style={{ height: "50px", width: "100px" }}
              className="w-0 lg:w-28"
            />
          </div>

          <div className="py-10 ">
            <p className="text-sm  md:text-base md:w-auto font-light text-gray-500 ">
              Theo Inglis,
              <br />
              Co-Founder, Housecure, UK
            </p>
            <div className="py-20">
              <div className="flex items-end pr-5 md:pr-32">
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
            <div className="w-full lg:w-auto">
              <p className="text-base font-light text-gray-500 pt-2">Quality</p>
              <p className="text-base font-light text-gray-500 pt-2">
                Schedule
              </p>
              <p className="text-base font-light text-gray-500 pt-2">Cost</p>
              <p className="text-base font-light text-gray-500 pt-2">
                Willing to refer
              </p>
            </div>
          </div>

          <div className="pt-72 px-8 md:pl-10 md:pr-20">
            <p className="text-base font-semibold pt-2">5.0 </p>
            <p className="text-base font-semibold pt-2">5.0</p>
            <p className="text-base font-semibold pt-2">5.0</p>
            <p className="text-base font-semibold pt-2">5.0</p>
          </div>

          <div className="flex flex-col ">
            <p className="font-medium md:font-semibold ld:font-bold w-auto py-16 lg:w-9/12 md:py-32">
              “Oleksandr was very easy to communicate with and everything was
              delivered on time.”
            </p>
            <p className="text-base font-light text-gray-500 ">
              Harry James,
              <br />
              Co-Founder, Teds Health, UK
            </p>
          </div>

          <div className="mx-0 md:mx-10">
            <Image
              src={quote}
              alt="quote"
              style={{ height: "50px", width: "100px" }}
              className="w-4 md:w-28"
            />
          </div>
        </div>
      </div>

      <div className="pr-0 md:px-10 pb-20">
        <div className=" w-full border-2 pl-5 md:pl-0 border-solid border-t-0 border-gray-300">
          <div className="flex flex-col lg:flex-row md:pr-36 md:pl-7 lg:pl-10 pt-10">
            <p className="font-medium md:font-bold text-sm w-auto lg:w-60 md:text-base ">
              “High-level of details in every phase. They really cared.”
            </p>
            <Image
              src={quote}
              alt="quote"
              style={{ height: "50px", width: "40px" }}
              className="w-3 md:w-10 "
            />
            <p className="font-medium md:font-bold text-sm  w-full lg:w-6/12 md:text-base  lg:px-20">
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
          <div className="flex justify-start lg:justify-end ml-0 mt-5 md:mt-0 md:ml-7 pr-10">
            <button className="flex border-2 border-black font-semibold md:font-bold text-sm md:text-base rounded-full p-4">
              Review all on Clutch{" "}
              <Image
                src={right}
                alt="right arrow"
                height={30}
                width={30}
                className="pl-2"
              />
            </button>
          </div>
          <div className=" flex p-10 gap-10 md:flex-row flex-col pl-0 pt-5 md:pl-7 md:pt-14 md:gap-20 lg:pl-10">
            <p className="text-sm md:text-lg font-base">
              Danny Trichter,
              <br />
              CEO, Accessibility Checker, Israe.
            </p>
            <p className="text-sm md:text-lg font-base">
              Kanan Hajizada,
              <br />
              Managing Partner, Fintech Startup, Azerbaijan
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
