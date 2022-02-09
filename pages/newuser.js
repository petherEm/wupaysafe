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
import CommentBox from "../components/CommentBox";

export default function NewUser() {
  return (
    <div className="flex flex-col">
      <div className="bg-yellow-500  min-h-screen flex items-center lg:justify-center gap-x-20">
        <LoginPage />
      </div>
      <div className="bg-yellow-500  min-h-screen flex items-center lg:justify-center gap-x-20">
        <SendMoney />
        <CommentBox
          title="To consider"
          content1="New payment method (Paysafe:cash) addition to the current flow"
          content2="in AT we have also Klarna as payment method"
        />
      </div>
      <div className="bg-yellow-500  min-h-screen flex items-center lg:justify-center gap-x-20">
        <Register />
        <CommentBox
          title="Registration data capture"
          content1="First Name, Last Name, Email"
          content2="and password creation"
        />
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
        <PaysafeVerification />
      </div>
      <div className="bg-yellow-500  min-h-screen flex flex-col items-center justify-center">
        <h1>Redirected</h1>
        <PaysafeBar />
      </div>
    </div>
  );
}
