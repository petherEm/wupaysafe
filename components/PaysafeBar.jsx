import React from "react";
import Image from "next/image";
import { ArrowLeftIcon, DocumentDownloadIcon, CollectionIcon, MailIcon, DeviceMobileIcon } from "@heroicons/react/solid";

const PaysafeBar = () => {
  return (
    <div className="flex flex-col justify-between bg-white lg:h-[640px] lg:w-[420px] md:h-[640px] md:w-[420px] shadow-lg mb-60">
      <div className="flex justify-between items-center  text-blue-500 px-2 py-4">
        <div className="ml-2 cursor-pointer">
          <ArrowLeftIcon className="h-5 w-5" />
        </div>
        <div>
          <Image
            src="/img/WU.svg"
            width="200px"
            height="50px"
            objectFit="cover"
          />
        </div>

        <div className="relative h-12 w-32 cursor-pointer">
          <Image src="/img/PSC2.png" layout="fill" objectFit="contain" />
        </div>
      </div>

      <div className="flex flex-col justify-between items-center h-[100%]">
        <div className="h-[80%] w-[100%] flex flex-col">
          {/* Core to change */}
          <div>
            <h1 className="text-center font-bold text-[18px]">203,90 EUR</h1>
            <div className="flex items-center justify-center">
              <Image
                src="/img/barcode2.jpg"
                width="170px"
                height="160px"
                objectFit="cover"
              />
            </div>
            <p className="text-right mr-4 text-gray-400 mt-2">Valid until: <span className="text-black font-bold">2022/03/03</span></p>
          </div>
          <div className="flex justify-between p-4 bg-blue-400 mt-4">
                <div className="flex flex-col items-center cursor-pointer">
                    <DocumentDownloadIcon className="h-8 w-8 text-white"/>
                    <p className="text-[10px] text-white">PDF</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <CollectionIcon className="h-8 w-8 text-white"/>
                    <p className="text-[10px] text-white">Wallet</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <MailIcon className="h-8 w-8 text-white"/>
                    <p className="text-[10px] text-white">E-mail</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <DeviceMobileIcon className="h-8 w-8 text-white"/>
                    <p className="text-[10px] text-white">SMS</p>
                </div>
                
          </div>
          <div className="flex items-center justify-center mt-4">
              <button className="border-2 py-2 px-8 rounded-3xl border-black">Need help in store? </button>
          </div>
          <div className="flex items-center justify-center mt-4 bg-indigo-500 h-full">
              Map to be added (MapBox)
          </div>

          {/* Core to change */}
        </div>
      </div>
    </div>
  );
};

export default PaysafeBar;
