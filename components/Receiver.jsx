import React from 'react';
import Image from 'next/image';
import { InformationCircleIcon, ArrowNarrowLeftIcon } from '@heroicons/react/solid';

const Receiver = () => {
    return (
        <div className="flex flex-col justify-between bg-gray-300 h-[640px] w-[420px] shadow-lg mb-60">
          <div className="flex justify-between items-center bg-black text-yellow-400 px-2 py-4">
            <div className="ml-2 cursor-pointer"><ArrowNarrowLeftIcon className="w-7 h-7" /></div>
            <div className="mr-4 border border-yellow-400 p-1 cursor-pointer hover:text-yellow-700 hover:border-yellow-700">
              Menu
            </div>
          </div>
          <div>
            <ul className="flex justify-between text-gray-400 bg-black px-4 py-2 text-[12px]">
              <li>Estimate</li>
              <li className="text-yellow-400 cursor-pointer">Receiver</li>
              <li>Payment</li>
              <li>Review</li>
            </ul>
          </div>
          <div className="flex flex-col justify-between items-center bg-gray-200 h-[100%]">
            <div className="h-[80%] w-[100%] flex flex-col">
            
            {/* Core to change */}
            <div className="flex flex-col justify-center items-center">
                <div className="bg-blue-400 w-full">
                    <p className="text-center text-white text-[12px] font-semibold p-1">Know your receiver</p>
                </div>
                <div className="flex items-center text-center bg-white shadow-md text-[12px] p-2">
                    <div>
                    <InformationCircleIcon className="h-8 w-8 text-blue-500" />
                    </div>
                    
                    <p>After your money has been picked up or deposited, it cannot be refunded.</p>
                </div>
            </div>
            <div className="flex flex-col p-4">
                <h1 className="text-gray-700">Receiver's information</h1>
                <div>
                    <input type="text" className="mt-2 rounded-lg py-2 px-6 mr-2 focus:outline-none text-[12px]" placeholder="First Name" />
                    <input type="text" className="mt-2 rounded-lg py-2 px-6 focus:outline-none text-[12px]" placeholder="Last Name" />
                    <input type="text" className="mt-2 rounded-lg py-2 px-6 mr-2 focus:outline-none text-[12px]" placeholder="Middle Name (optional)" />
                    <input type="email" className="mt-2 rounded-lg py-2 px-6 focus:outline-none text-[12px]" placeholder="Email (optional)" />
                    <input type="phone" className="mt-2 rounded-lg py-2 px-12 focus:outline-none text-[12px]" placeholder="Phone (optional)" />
                </div>
            </div>
                <p className="text-center">OR</p>
            <div className="flex flex-col p-4">
                <h1 className="text-gray-700">Receiver from selected country</h1>
                <div>
                    <div className="bg-white shadow-md p-2 flex items-center">
                        <div>
                            <Image src="/img/PL.svg" width="30px" height="30px" objectFit="cover" />
                        </div>
                        <div className="ml-6">
                            <p className="text-[14px]">Dariusz Korczyc</p>
                            <p className="text-[10px]">Poland</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md p-2 flex items-center mt-4">
                        <div>
                            <Image src="/img/DE.png" width="30px" height="20px" objectFit="cover" />
                        </div>
                        <div className="ml-6">
                            <p className="text-[14px]">Paul Bludau</p>
                            <p className="text-[10px]">Germany</p>
                        </div>
                    </div>
                </div>
            </div>


              


            
            {/* Core to change */}
              
            </div>
            <div className="h-[10%] flex flex-col justify-center">
              <button className="bg-blue-300 py-2 px-44 mb-4 rounded-2xl hover:scale-105 transition duration-75 ease-in-out">
                Next
              </button>
            </div>
          </div>
        </div>
      );
};

export default Receiver;
