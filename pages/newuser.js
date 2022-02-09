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
    <div className="relative flex flex-col">
      <div className="absolute top-24 right-10">
        <CommentBox />
      </div>
      <div className="bg-yellow-500 lg:px-40 h-screen flex items-center lg:justify-center gap-x-20">
        <LoginPage />
      </div>
      <div className="bg-yellow-500  min-h-screen flex items-center justify-center">
        <SendMoney />
      </div>
      <div className="bg-yellow-500  min-h-screen flex items-center justify-center">
        <Register />
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
