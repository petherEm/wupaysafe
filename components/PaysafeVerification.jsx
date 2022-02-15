import React from "react";
import Image from "next/image";
import {
  ArrowLeftIcon,
  IdentificationIcon,
  CameraIcon,
} from "@heroicons/react/solid";

const PaysafeVerification = () => {
  return (
    <div className="flex flex-col justify-between bg-white lg:h-[740px] lg:w-[420px] md:h-[740px] md:w-[420px] shadow-lg mb-60">
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
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-gray-500 text-xl">
              Cash Funded Money Transfer requires{" "}
              <span className="font-bold">One Time Verification</span>
            </h1>
            <div className="bg-slate-100 h-full w-[90%] rounded-xl shadow-lg">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <IdentificationIcon className="h-6 w-6 text-blue-500" />
                  <p className="text-gray-600 text-[12px]">
                    Take a photo of your ID
                  </p>
                </div>

                <div className="flex items-center justify-center border-2 p-4">
                  <Image
                    src="/img/IDPLfake.jpeg"
                    width="300px"
                    height="180px"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <CameraIcon className="h-6 w-6 text-blue-500" />
                  <p className="text-gray-600 text-[12px]">Take a selfie</p>
                </div>
                <div className="flex items-center justify-center border-2 border-red-400 p-4">
                  <Image
                    src="/img/FaceIdent.jpg"
                    width="300px"
                    height="180px"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Core to change */}
          <p className="text-center bg-green-400 text-white mx-auto px-10 py-2 mt-2 rounded-xl">Great! Verification Successfull</p>
          <button className="mx-auto bg-blue-400 text-white py-3 px-20 mt-4 mb-4 rounded-2xl">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaysafeVerification;
