import React from "react";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";

const Register = () => {
  return (
    <div className="flex flex-col justify-between bg-gray-300 h-[620px] w-[380px] shadow-lg mb-60">
      <div className="flex justify-between items-center bg-black text-yellow-400 px-2 py-4">
        <div className="ml-2 cursor-pointer"><ArrowNarrowLeftIcon className="w-7 h-7" /></div>
        <div>Register</div>
        <div className="mr-4 border border-yellow-400 p-1 cursor-pointer hover:text-yellow-700 hover:border-yellow-700">
          Menu
        </div>
      </div>
      <div>
       
      </div>
      <div className="flex flex-col justify-between items-center bg-gray-200 h-[100%]">
        <div className="h-[80%] w-[100%] flex flex-col p-2 mt-4">
          <h1 className="text-center text-3xl font-semibold">
            Register for free
          </h1>
          <p className="mt-4">
            Please enter your name exactly as it appears on your official ID
          </p>

          <div className="flex">
            <div className="flex flex-col p-2">
              <input
                className="mt-2 rounded-lg py-2 px-4 focus:outline-none text-[12px]"
                type="text"
                placeholder="First Name"
              />
              <input
                className="mt-2 rounded-lg py-2 px-4 focus:outline-none text-[12px]"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="mt-2 rounded-lg py-2 px-4 focus:outline-none text-[12px]"
                type="email"
                placeholder="Your email address"
              />
            </div>
            <div className="flex flex-col p-2">
              <input
                className="mt-2 rounded-lg py-2 px-4 focus:outline-none text-[12px]"
                type="text"
                placeholder="Middle Name (optional)"
              />
              <input
                className="mt-2 rounded-lg py-2 px-4 focus:outline-none text-[12px]"
                type="password"
                placeholder="Create password"
              />
            </div>
          </div>
          <div className="px-4 py-4 flex items-center">
            <input type="checkbox" />
            <p className="text-[12px] ml-2">
              Keep me up to date with Western Union’s latest services and other
              special offers. Communications may be sent by email. I can edit
              these settings anytime in my profile.
            </p>
          </div>
          <div className="px-4 py-4 flex items-center">
            <input type="checkbox" />
            <p className="text-[12px] ml-2">
              Share my information. I want to see relevant ads and the latest
              offers from Western Union. I can edit this setting anytime in my
              profile.
            </p>
          </div>
          <div className="px-4 flex items-center">
            <input type="checkbox" />
            <p className="text-[12px] ml-2">
              I acknowledge I have read the Terms & Conditions and Online
              Privacy Policy.
            </p>
          </div>
        </div>
        <div className="h-[10%] flex flex-col justify-center">
          <button className="bg-blue-300 py-2 lg:px-38 px-32 mb-4 rounded-2xl hover:scale-105 transition duration-75 ease-in-out">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
