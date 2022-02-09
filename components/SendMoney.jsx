import React from 'react';
import Image from 'next/image';
import { CashIcon, LibraryIcon, CurrencyDollarIcon, CreditCardIcon, ArrowNarrowLeftIcon } from '@heroicons/react/solid'

const SendMoney = () => {
  return (
    <div className="flex flex-col justify-between bg-gray-300 h-[720px] lg:w-[420px] w-[380px] shadow-lg mb-60">
         <div className="flex justify-between items-center bg-black text-yellow-400 px-2 py-4">
             <div className="ml-2 cursor-pointer"><ArrowNarrowLeftIcon className="w-7 h-7" /></div>
             <div className="mr-4 border border-yellow-400 p-1 cursor-pointer hover:text-yellow-700 hover:border-yellow-700">Menu</div>
         </div>
         <div>
             <ul className="flex justify-between text-gray-400 bg-black px-4 py-2 text-[12px]">
                 <li className="text-yellow-400 cursor-pointer">Estimate</li>
                 <li>Receiver</li>
                 <li>Payment</li>
                 <li>Review</li>
             </ul>
         </div>
         <div className="flex flex-col justify-between items-center bg-gray-200 h-[100%]">
             <div className="h-[80%] w-[100%] flex p-2">
                 <div className="flex flex-col">
                     <p className="text-[10px] text-gray-500">Send to</p>
                    <select className="lg:w-[400px] w-[320px] h-[100px] rounded-lg focus:outline-none py-3" type="select">
                        <option value="Turkey">Turkey</option>
                        <option value="Germany">Germany</option>
                        <option value="Germany">Poland</option>
                        <option value="Germany">France</option>
                        <option value="Germany">Portugal</option>
                        <option value="Germany">Austria</option>
                    </select>
                    <div className="flex lg:justify-between mt-2 gap-x-4">
                        <div className="">
                            <p className="text-[10px] text-gray-500">You send</p>
                            <input type="text" placeholder="0 EUR" className="p-2 rounded-lg lg:w-[190px] w-[130px] focus:outline-none" />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-500">Receiver gets</p>
                            <input type="text" placeholder="0 TRY" className="p-2 rounded-lg lg:w-[190px] w-[130px] focus:outline-none" />
                        </div>
                    </div>
                    <p className="text-center text-[14px] text-gray-500 mt-4">How will your receiver get it?</p>
                    <div className="flex justify-evenly p-4">
                        <div className="flex flex-col items-center justify-center bg-white hover:bg-blue-500 border-4 border-red-400 h-[80px] w-[120px] rounded-lg cursor-pointer">
                            <CashIcon className="h-10 w-10" />
                            <h1 className="text-[10px]">Cash Pickup</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-white hover:bg-blue-500 h-[80px] w-[120px] rounded-lg cursor-pointer">
                            <LibraryIcon className="h-10 w-10" />
                            <h1 className="text-[10px]">Bank Account</h1>
                        </div>
                    </div>
                    <p className="text-center text-[14px] text-gray-500">How will you pay?</p>
                    <div className="flex lg:justify-evenly p-4 gap-x-2">
                        <div className="flex flex-col items-center justify-center bg-white hover:bg-blue-500 lg:h-[100px] lg:w-[120px] rounded-lg cursor-pointer">
                            <CreditCardIcon className="h-10 w-10" />
                            <h1 className="text-[12px]">Credit/Debit Card</h1>
                            <p className="text-[10px]">Fees 2,90 EUR</p>
                            <p className="text-[10px] font-bold">In Minutes</p>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-white hover:bg-blue-500 h-[100px] w-[120px] rounded-lg cursor-pointer">
                            <CurrencyDollarIcon className="h-10 w-10" />
                            <h1 className="text-[12px]">Pay in Cash</h1>
                            <p className="text-[10px]">Fees 4,90 EUR</p>
                            <p className="text-[10px] font-bold">In Minutes</p>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-white hover:bg-blue-500 border-4 border-red-400 h-[100px] w-[120px] rounded-lg cursor-pointer">
                            <Image src="/img/PSC.jpg" width="90px" height="50px" />
                            <p className="text-[10px]">Fees 3,90 EUR</p>
                            <p className="text-[10px] font-bold">In Minutes</p>
                            
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <h1 className="font-semibold">Summary</h1>
                        <p className="text-[12px] text-gray-800">Fee: </p>
                        <p className="text-[12px] text-gray-800">Total:</p>
                        <p className="text-[12px] text-gray-800">Receiver gets:</p>
                        <p className="text-[12px] text-gray-800">Delivery time: </p>


                    </div>

                    
                    
                 </div>
                 

             </div>
             <div className="h-[10%] flex flex-col justify-center">
                 <button className="bg-blue-300 py-2 lg:px-44 px-28 mb-4 rounded-2xl hover:scale-105 transition duration-75 ease-in-out">Next</button>
             </div>
         </div>
         
    </div>

  )
};

export default SendMoney;

