import React from "react";
import Image from "next/image";
import pepsi from "../../../../public/assets/client_img/pepsi.png";
import adidas from "../../../../public/assets/client_img/addidas.png";
import gucci from "../../../../public/assets/client_img/gucci.png";
import house from "../../../../public/assets/client_img/housecore.png";
import compro from "../../../../public/assets/client_img/compro.png";
import it from "../../../../public/assets/client_img/it.png";

export const Domain = () => {
  return (
    <div className="flex flex-wrap items-center my-24 mx-auto max-w-screen-xl">
      <div className="w-full md:w-1/2 p-6 flex flex-wrap items-center justify-around gap-28">
        <div className="flex flex-col items-center justify-center p-6 pt-16 gap-40">
          <Image
            src={pepsi}
            alt="pepsi"
            width={130}
            height={130}
            className=""
          />
          <Image
            src={gucci}
            alt="gucci Logo"
            width={160}
            height={160}
            className=""
          />
          <Image
            src={compro}
            alt="compro"
            width={150}
            height={150}
            className=""
          />
        </div>
        <div className="flex flex-col items-center justify-center p-6 gap-40">
          <Image src={adidas} alt="adidas" width={160} height={160} />
          <Image
            src={house}
            alt="house"
            width={160}
            height={160}
            className=""
          />
          <Image src={it} alt="it" width={70} height={70} className=" " />
        </div>
      </div>

      <div className="w-full md:w-1/2 pb-24">
        <div className="pl-28">
          <h1 className="text-4xl font-bold my-7">Business domains</h1>
          <p className="text-base w-10/12 text-gray-700 mb-7">
            We boast extensive experience with products and projects across
            various business niches, including:
          </p>

          <div className=" flex flex-wrap gap-1 w-9/12">
            <p className="flex items-center justify-center px-4 py-2 border border-black rounded-full text-xs font-bold text-center m-1 whitespace-nowrap">
              REAL ESTATE
            </p>
            <p className="flex items-center justify-center px-4 py-2 border border-black rounded-full text-xs font-bold text-center m-1 whitespace-nowrap">
              FINANCE
            </p>
            <p className="flex items-center justify-center px-4 py-2 border border-black rounded-full text-xs font-bold text-center m-1 whitespace-nowrap">
              BLOCKCHAIN
            </p>
            <p className="flex items-center justify-center px-4 py-2 border border-black rounded-full text-xs font-bold text-center m-1 whitespace-nowrap">
              INSURANCE
            </p>
            <p className="flex items-center justify-center px-4 py-2 border border-black rounded-full text-xs font-bold text-center m-1 whitespace-nowrap">
              TELECOMMUNICATIONS
            </p>
            <p className="flex items-center justify-center px-4 py-2 border border-black rounded-full text-xs font-bold text-center m-1 whitespace-nowrap">
              BANKING
            </p>
            <p className="flex items-center justify-center px-4 py-2 border border-black rounded-full text-xs font-bold text-center m-1 whitespace-nowrap">
              E-COMMERCE
            </p>
            <p className="flex items-center justify-center px-4 py-2 border border-black rounded-full text-xs font-bold text-center m-1 whitespace-nowrap">
              LOGISTIC
            </p>
            <p className="flex items-center justify-center px-4 py-2 border border-black rounded-full text-xs font-bold text-center m-1 whitespace-nowrap">
              HEALTHCARE
            </p>
            <p className="flex items-center justify-center px-4 py-2 border border-black rounded-full text-xs font-bold text-center m-1 whitespace-nowrap">
              HEALTHTECH
            </p>
            <p className="flex items-center justify-center px-4 py-2 border border-black rounded-full text-xs font-bold text-center m-1 whitespace-nowrap">
              MARTECH
            </p>
            <p className="flex items-center justify-center px-4 py-2 border border-black rounded-full text-xs font-bold text-center m-1 whitespace-nowrap">
              FINTECH
            </p>
            <p className="flex items-center justify-center px-4 py-2 border border-black rounded-full text-xs font-bold text-center m-1 whitespace-nowrap">
              ACCESSIBILITY
            </p>
            <p className="flex items-center justify-center px-4 py-2 border border-black rounded-full text-xs font-bold text-center m-1 whitespace-nowrap">
              ADA
            </p>
            <p className="flex items-center justify-center px-4 py-2 border border-black rounded-full text-xs font-bold text-center m-1 whitespace-nowrap">
              WCAG
            </p>
            <p className="flex items-center justify-center px-4 py-2 border border-black rounded-full text-xs font-bold text-center m-1 whitespace-nowrap">
              TRAVEL AND LEISURE
            </p>
            <p className="flex items-center justify-center px-4 py-2 border border-black rounded-full text-xs font-bold text-center m-1 whitespace-nowrap">
              BUSINESS MANAGEMENT
            </p>
            <p className="flex items-center justify-center px-4 py-2 border border-black rounded-full text-xs font-bold text-center m-1 whitespace-nowrap">
              VOLUNTEERING
            </p>
            <p className="flex items-center justify-center px-4 py-2 border border-black rounded-full text-xs font-bold text-center m-1 whitespace-nowrap">
              NON-PROFIT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
