import React from "react";
import Image from "next/image";
import { SwitchHorizontalIcon, ArrowNarrowLeftIcon } from "@heroicons/react/solid";

const Summary = () => {
  return (
    <div className="flex flex-col justify-between bg-gray-300 lg:h-[640px] lg:w-[420px] shadow-lg mb-60">
      <div className="flex justify-between items-center bg-black text-yellow-400 px-2 py-4">
        <div className="ml-2 cursor-pointer"><ArrowNarrowLeftIcon className="w-7 h-7" /></div>
        <div className="mr-4 border border-yellow-400 p-1 cursor-pointer hover:text-yellow-700 hover:border-yellow-700">
          Menu
        </div>
      </div>
      <div>
        <ul className="flex justify-between text-gray-400 bg-black px-4 py-2 text-[12px]">
          <li>Estimate</li>
          <li>Receiver</li>
          <li>Payment</li>
          <li className="text-yellow-400 cursor-pointer">Review</li>
        </ul>
      </div>
      <div className="flex flex-col justify-between items-center bg-gray-200 h-[100%]">
        <div className="h-[80%] w-[100%] flex flex-col">
          {/* Core to change */}
          <div className="bg-slate-100 flex flex-col">
            <div className="flex items-center justify-between p-3">
              <div className="flex flex-col">
                <p className="text-[12px] font-bold">You Pay</p>
                <p className="text-gray-800 text-[14px]">203,90 EUR</p>
              </div>
              <SwitchHorizontalIcon className="w-8 h-8" />
              <div>
                <p className="text-[12px] font-bold">Receiver gets</p>
                <p className="text-gray-800 text-[14px]">200 EUR</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 shadow-lg">
              <div className="flex flex-col">
                <div className="flex gap-x-20 p-2">
                  <p className="text-gray-800 text-[14px]">Delivery method:</p>
                  <div className="flex items-center gap-x-1">
                    <p className="text-gray-800 text-[14px] font-bold">
                      To agent location in Poland
                    </p>
                    <Image
                      src="/img/PL.svg"
                      width="50px"
                      height="40px"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex gap-x-20 p-2">
                  <p className="text-gray-800 text-[14px]">Payment method:</p>
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/img/PSC2.png"
                      width="100px"
                      height="30px"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex gap-x-20 p-2">
                  <p className="flex-1 text-gray-800 text-[14px]">Money available:</p>
                  <p className="flex-1 text-gray-800 text-[14px] font-bold">
                    In Minutes
                  </p>
                </div>
                <div className="flex gap-x-20 p-2">
                  <p className="flex-1 text-gray-800 text-[14px]">Transfer Amount:</p>
                  <p className="flex-1 text-gray-800 text-[14px] font-bold">
                    200 EUR
                  </p>
                </div>
                <div className="flex gap-x-20 p-2">
                  <p className="flex-1 text-gray-800 text-[14px]">Transfer Fee:</p>
                  <p className="flex-1 text-gray-800 text-[14px] font-bold">
                    3,90 EUR
                  </p>
                </div>
                <div className="flex gap-x-20 p-2 bg-indigo-200">
                  <p className="flex-1 text-gray-800 text-[14px]">Transfer Total:</p>
                  <p className="flex-1 text-gray-800 text-[14px] font-bold">
                    203,90 EUR
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 mt-2 bg-blue-100 shadow-lg">
                <div>
                    <p className="text-gray-800 text-[14px] font-bold">Sender</p>
                    <p className="text-gray-600 text-[14px]">Piotr Maciejewski</p>
                </div>
                <div>
                    <p className="text-gray-800 text-[14px] font-bold">Receiver</p>
                    <p className="text-gray-600 text-[14px]">Dariusz Korczyc</p>
                </div>
            </div>
            <div className="flex p-4 mt-2 items-center">
                <input type="checkbox" className="h-5 w-10" />
                <p className="text-[11px] ml-2 text-gray-600">I agree to the Western Union Online Privacy Statement, I confirm that I am not conducting this transaction on behalf of another person.</p>
            </div>
          </div>

          {/* Core to change */}
        </div>
        <div className="h-[10%] flex flex-col justify-center">
          <button className="bg-blue-300 py-2 mx-auto px-36 mb-4 mt-2 rounded-2xl hover:scale-105 transition duration-75 ease-in-out">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
