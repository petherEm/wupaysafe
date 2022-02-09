import React from "react";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";

const IDdetails = () => {
  return (
    <div className="flex flex-col justify-between bg-gray-300 h-[640px] w-[420px] shadow-lg mb-60">
      <div className="flex justify-between items-center bg-black text-yellow-400 px-2 py-4">
        <div className="ml-2 cursor-pointer"><ArrowNarrowLeftIcon className="w-7 h-7" /></div>
        <div>
          <p>ID Verification</p>
        </div>
        <div className="mr-4 border border-yellow-400 p-1 cursor-pointer hover:text-yellow-700 hover:border-yellow-700">
          Menu
        </div>
      </div>

      <div className="flex flex-col justify-between items-center bg-gray-200 h-[100%]">
        <div className="h-[80%] w-[100%] flex flex-col justify-center items-center">
          {/* Core to change */}
          <div className="bg-slate-300 h-[90%] w-[90%] shadow-lg flex flex-col p-2">
            <div className="flex flex-col">
              <label className="ml-2 text-[10px]">ID number</label>
              <input
                type="text"
                placeholder="XXXXXXXX24"
                className="p-2 m-2 rounded-xl text-[12px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="ml-2 text-[10px]">Issuing Country</label>
              <input
                type="text"
                placeholder="Poland"
                className="p-2 m-2 rounded-xl text-[12px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="ml-2 text-[10px]">
                Personal Identification Number
              </label>
              <input
                type="text"
                placeholder="843202301212"
                className="p-2 m-2 rounded-xl text-[12px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="ml-2 text-[10px]">Issue date</label>
              <input
                type="text"
                placeholder="2017/10/10"
                className="p-2 m-2 rounded-xl text-[12px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="ml-2 text-[10px]">Issuing country</label>
              <input
                type="text"
                placeholder="Poland"
                className="p-2 m-2 rounded-xl text-[12px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="ml-2 text-[10px]">Expiry date</label>
              <input
                type="text"
                placeholder="2022/10/10"
                className="p-2 m-2 rounded-xl text-[12px]"
              />
            </div>
          </div>

          {/* Core to change */}
        </div>
        <div className="h-[20%] flex flex-col justify-center">
          <button className="bg-blue-300 py-2 px-40 mb-4 rounded-2xl hover:scale-105 transition duration-75 ease-in-out">
            Next
          </button>
          <button className="bg-blue-200 py-2 px-40 mb-4 rounded-2xl hover:scale-105 transition duration-75 ease-in-out">
            Change ID
          </button>
        </div>
      </div>
    </div>
  );
};

export default IDdetails;
