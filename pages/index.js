import Head from "next/head";
import Image from "next/image";
import LoginPage from "../components/LoginPage";
import SendMoney from "../components/SendMoney";
import Register from "../components/Register";
import Receiver from "../components/Receiver";
import IDdetails from "../components/IDdetails";
import PaysafeLogin from "../components/PaysafeLogin";
import PaysafeBar from "../components/PaysafeBar";
import PaysafeVerification from "../components/PaysafeVerification";
import Summary from "../components/Summary";
import Confirmation from "../components/Confirmation";

export default function Home() {
  return (
    <>
      <div className="bg-yellow-500 h-screen flex items-center justify-center p-4">
        <LoginPage />
      </div>
      <div className="bg-yellow-500  min-h-screen flex items-center justify-center p-4">
        <Register />
      </div>
      <div className="bg-yellow-500  min-h-screen flex items-center justify-center p-4">
        <SendMoney />
      </div>
      
      <div className="bg-yellow-500  min-h-screen flex items-center justify-center p-4">
        <Receiver />
      </div>
      <div className="bg-yellow-500  min-h-screen flex items-center justify-center p-4">
        <IDdetails />
      </div>
      <div className="bg-yellow-500  min-h-screen flex flex-col items-center justify-center p-4">
        <h1>Redirected</h1>
        <PaysafeLogin />
      </div>
      <div className="bg-yellow-500  min-h-screen flex flex-col items-center justify-center p-4">
        <h1>Redirected</h1>
        <PaysafeVerification />
      </div>
      <div className="bg-yellow-500  min-h-screen flex flex-col items-center justify-center p-4">
        <h1>Redirected</h1>
        <PaysafeBar />
      </div>
      <div className="bg-yellow-500  min-h-screen flex flex-col items-center justify-center p-4">
        <Summary />
      </div>
      <div className="bg-yellow-500  min-h-screen flex flex-col items-center justify-center p-4">
        <Confirmation />
      </div>
    </>
  );
}
