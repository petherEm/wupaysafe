import React from "react";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/solid";

const PaysafeLogin = () => {
  return (
    <div className="flex flex-col justify-between bg-white lg:h-[640px] lg:w-[420px] shadow-lg mb-60">
      <div className="flex justify-between items-center  text-blue-500 px-2 py-4">
        <div className="ml-2 cursor-pointer">
          <ArrowLeftIcon className="h-5 w-5" />
        </div>
        <div>
        <Image src="/img/WU.svg" width="200px" height="50px" objectFit="cover"/>
        </div>

        <div className="relative h-12 w-32 cursor-pointer">
          <Image src="/img/PSC2.png" layout="fill" objectFit="contain" />
        </div>
      </div>

      <div className="flex flex-col justify-between items-center h-[100%]">
        <div className="h-[80%] w-[100%] flex flex-col">
          {/* Core to change */}

          <div className="p-4 mt-2">
            <div className="mt-4 mb-6">
              <p className="">Payment amount: <span className="font-bold">203.90 EUR</span></p>
            </div>
            <div className="flex flex-col p-2 bg-blue-200 shadow-lg rounded-xl">
              <h1 className="text-gray-600">Login to pay with PAYSAFE CASH</h1>
              <input
                type="email"
                placeholder="Email address"
                className="m-2 p-2 focus:outline-none rounded-xl text-[12px]"
              />
              <input
                type="password"
                placeholder="Password"
                className="m-2 p-2 focus:outline-none rounded-xl text-[12px]"
              />
              <div className="flex items-center mt-2">
                <input type="checkbox" />
                <p className="ml-4 text-[12px] text-gray-600 font-bold">
                  Stay logged In
                </p>
              </div>
              <button className="bg-blue-600 text-white py-3 px-4 mt-4 mb-4 rounded-2xl">
                Login and Get Barcode
              </button>
              <button className="bg-blue-400 text-white py-3 px-4 mt-4 mb-4 rounded-2xl">
                New ? / Sign up
              </button>
            </div>
          </div>

          {/* Core to change */}
        </div>
        
      </div>
    </div>
  );
};

export default PaysafeLogin;
