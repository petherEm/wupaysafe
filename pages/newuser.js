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
import CompleteReg from "../components/CompleteReg";
import Summary from "../components/Summary";
import Confirmation from "../components/Confirmation";

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
          content3="additional personal data is captured before ID details screen i.e. Address, City, Phone Number, Date of Birth, Country of Birth, Gender and then ID details."
        />
      </div>
      <div className="bg-yellow-500  min-h-screen flex items-center lg:justify-center gap-x-20">
        <Receiver />
        <CommentBox
          title="To consider"
          content1="SDQ to trigger"
          content3="Source of Funds, Reason of Transaction, Relationship to Receiver..?"
        />
      </div>
      <div className="bg-yellow-500  min-h-screen flex items-center justify-center p-4 gap-x-20">
        <CompleteReg />
        <CommentBox title="As mentioned" content1="Complete Personal Details" />
      </div>
      <div className="bg-yellow-500  min-h-screen flex items-center justify-center gap-x-20">
        <IDdetails />
        <CommentBox title="As mentioned" content1="Complete ID Details" />
      </div>
      <div className="bg-yellow-500  min-h-screen flex items-center justify-center gap-x-20">
        
        <PaysafeLogin />
        <CommentBox title="Customer redirected" content1="Customer can log in to Paysafe (a separate login than to WU, to consider Single Sign On"  content3="customer should register - to consider data passporting from WU App" />
      </div>
      <div className="bg-yellow-500  min-h-screen flex items-center justify-center gap-x-20">
        
        <PaysafeVerification />
        <CommentBox title="Customer One Time Verification" content1="Paysafe can set the verification for first time WU users"  content3="can we outsource verification? or move this step to WU App? " />
      </div>
      <div className="bg-yellow-500  min-h-screen flex items-center justify-center gap-x-20">
        <PaysafeBar />
      </div>
      <div className="bg-yellow-500  min-h-screen flex items-center justify-center gap-x-20">
        <Summary />
      </div>
      <div className="bg-yellow-500  min-h-screen flex items-center justify-center gap-x-20">
        <Confirmation />
      </div>
    </div>
  );
}
