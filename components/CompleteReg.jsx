import React from "react";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";

const CompleteReg = () => {
  return (
    <div className="flex flex-col justify-between bg-gray-300 h-[640px] w-[420px] shadow-lg mb-60">
      <div className="flex justify-between items-center bg-black text-yellow-400 px-2 py-4">
        <div className="ml-2 cursor-pointer">
          <ArrowNarrowLeftIcon className="w-7 h-7" />
        </div>
        <div>
          <p>Personal Details</p>
        </div>
        <div className="mr-4 border border-yellow-400 p-1 cursor-pointer hover:text-yellow-700 hover:border-yellow-700">
          Menu
        </div>
      </div>

      <div className="flex flex-col justify-between items-center bg-gray-200 h-[100%]">
        <div className="h-[100%] w-[100%] flex flex-col justify-center items-center">
          {/* Core to change */}
          <div className="bg-slate-300 h-[100%] w-[90%] shadow-lg flex flex-col p-2 mt-4 mb-4">
            <div className="flex flex-col">
              <p className="text-[20px] mb-4 font-bold">
                Hi, Piotr! We need some of your personal details.
              </p>
            </div>
            <div className="flex flex-col">
              <label className="ml-2 text-[10px]">Street Address</label>
              <input
                type="text"
                placeholder="Strasse 44"
                className="p-2 m-2 rounded-xl text-[12px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="ml-2 text-[10px]">City or Town</label>
              <input
                type="text"
                placeholder="Vienna"
                className="p-2 m-2 rounded-xl text-[12px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="ml-2 text-[10px]">Phone number</label>
              <input
                type="text"
                placeholder="+49 "
                className="p-2 m-2 rounded-xl text-[12px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="ml-2 text-[10px]">Date of birth</label>
              <input
                type="text"
                placeholder="01 / 01 / 1990"
                className="p-2 m-2 rounded-xl text-[12px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="ml-2 text-[10px]">Country of Birth</label>
              <input
                type="text"
                placeholder="Poland"
                className="p-2 m-2 rounded-xl text-[12px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="ml-2 text-[10px]">Gender</label>
              <div className="flex items-center
              justify-start gap-x-4 ml-4 mt-2">
                <div className="flex flex-col items-center justify-center">
                  <input type="checkbox" />
                  <p className="text-[10px]">Male</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <input type="checkbox" />
                  <p className="text-[10px]">Female</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core to change */}
        </div>
        <div className="h-[20%] flex flex-col justify-center">
          <button className="bg-blue-300 py-2 px-40 mb-4 rounded-2xl hover:scale-105 transition duration-75 ease-in-out">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompleteReg;
