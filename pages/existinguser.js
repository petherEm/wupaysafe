
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

export default function ExistingUser() {
  return (
    <>

      <div className="bg-yellow-500 h-screen flex flex-col items-center justify-center">
        <h1 className="text-[28px] font-bold text-gray-200 mb-6">Existing User Journey</h1>
        <LoginPage />
      </div>
      <div className="bg-yellow-500  min-h-screen flex items-center justify-center">
        <SendMoney />
      </div>
      <div className="bg-yellow-500  min-h-screen flex items-center justify-center">
        <Receiver />
      </div>
      <div className="bg-yellow-500  min-h-screen flex items-center justify-center">
        <IDdetails />
      </div>
      <div className="bg-yellow-500  min-h-screen flex flex-col items-center justify-center">
        <h1>Redirected</h1>
        <PaysafeLogin />
      </div>
      <div className="bg-yellow-500  min-h-screen flex flex-col items-center justify-center">
        <h1>Redirected</h1>
        <PaysafeBar />
      </div>
      <div className="bg-yellow-500  min-h-screen flex flex-col items-center justify-center">
        <h1>Redirected</h1>
        <Summary />
      </div>
      <div className="bg-yellow-500  min-h-screen flex flex-col items-center justify-center">
        <h1>Redirected</h1>
        <Confirmation />
      </div>
    </>
  );
}
