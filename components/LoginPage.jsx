import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-between bg-gray-300 h-[580px] w-[420px] shadow-lg">
         <div className="flex justify-between items-center bg-black text-yellow-400 px-2 py-4">
             <div className="ml-2 cursor-pointer">Logo</div>
             <div className="mr-4 border border-yellow-400 p-1 cursor-pointer hover:text-yellow-700 hover:border-yellow-700">Menu</div>
         </div>
         <div className="flex flex-col justify-between items-center bg-yellow-400 h-[100%]">
             <div className="h-[60%] flex mt-20">
                 <h1 className="text-4xl font-bold">Welcome</h1>
             </div>
             <div className="h-[40%] flex flex-col justify-center">
                 <button className="bg-blue-500 py-4 px-28 mb-4 rounded-2xl hover:scale-105 transition duration-75 ease-in-out">Send Money</button>
                 <button className="bg-blue-300 py-4 px-28 mb-4 rounded-2xl hover:scale-105 transition duration-75 ease-in-out">Login / Sign up</button>
             </div>
         </div>
         
    </div>

  )
};

export default LoginPage;
