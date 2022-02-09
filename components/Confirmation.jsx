import React from "react";
import Image from "next/image";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";

const Confirmation = () => {
  return (
    <div className="flex flex-col justify-between bg-gray-300 lg:h-[640px] lg:w-[420px] shadow-lg mb-60">
      <div className="flex justify-between items-center bg-black text-yellow-400 px-2 py-4">
        <div className="ml-2 cursor-pointer"><ArrowNarrowLeftIcon className="w-7 h-7" /></div>
        <div className="mr-4 border border-yellow-400 p-1 cursor-pointer hover:text-yellow-700 hover:border-yellow-700">
          Menu
        </div>
      </div>
      <div className="bg-green-400  text-black p-2">
        <p className="text-[12px] text-center font-bold">Thank you!</p>
      </div>
      <div className="flex flex-col justify-between items-center bg-gray-200 h-[100%]">
        <div className="h-[80%] w-[100%] flex flex-col items-center">
          {/* Core to change */}
          <div className="bg-blue-200 shadow-lg w-[90%] p-6 mt-4">
            <h1 className="text-[24px] font-bold text-gray-400">
              <span className="text-blue-600 font-bold text-[32px]">
                Your transaction is successfully staged.
              </span>{" "}
              
            </h1>
          </div>
          <div className="bg-slate-300 shadow-lg w-[90%] p-6 mt-4">
            <p className="text-[20px]">
              Bring <span className="font-bold">203,90 EUR</span> to any of Paysafe Cash stores{" "}
            </p>
            <Image src="/img/PSC2.png" width="140px" height="80px" />
          </div>

          {/* Core to change */}
        </div>
        <div className="h-[30%] flex flex-col justify-center mt-4">
          <button className="bg-blue-300 py-2 mx-auto lg:px-32 px-20 mb-4 rounded-2xl hover:scale-105 transition duration-75 ease-in-out">
            Show Barcode
          </button>
          <button className="bg-blue-400 py-2 mx-auto lg:px-36 px-20 mb-4 mt-2 rounded-2xl hover:scale-105 transition duration-75 ease-in-out">
            Send New
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
