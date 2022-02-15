import Head from "next/head";
import Image from "next/image";

import ChartDefault from "../components/ChartDefault";

export default function Business() {
  return (
    <>
      {/* POLAND BUSINESS POTENTIAL */}

      <div className="flex lg:flex-row flex-wrap lg:p-2 bg-blue-100">
        <div className="lg:p-8 p-2 lg:h-1/2 lg:w-1/2">
          <h1 className="text-6xl font-bold">POLAND BUSINESS POTENTIAL</h1>
          <p className="text-[18px] mt-10">
            <span className="font-bold">
              Paysafe:cash is a cash payment method for online goods and
              services.{" "}
            </span>
            Widely used by customers that are not willing to provide card/bank
            details for online payments, by unbanked customers and those who are
            cash-oriented. The given use cases are highly correlated with
            retail, Western Union customer base hence cooperation with
            Paysafe:cash could be a solid back-up for the existing WU agent
            network.
          </p>
          <p className="text-[18px] mt-10">
            In most countries where Paysafecash is offered customer are required
            to register once for a Paysafecash Account in order to comply with
            international Anti-Money- Laundering regulation. For the customer
            the account provides significant benefits such as a transaction
            history, storage of generated barcodes and the option to have
            refunds paid into the Paysafecash Account for future payments.
          </p>
          <ul className="ml-6 list-disc">
            <li className="text-[18px] mt-10">
              The proposed business model consist on leveraging Paysafe:cash
              network with no direct, agent-like relation to retailers.
            </li>
            <li className="text-[18px] mt-10">
              Paysafe:cash fee is set as percentage from the sent principal.
            </li>
            <li className="text-[18px] mt-10">
              Paysafe:cash may faciliate direct marketing action/activit across
              POS to ensure proper customer education and product adoption.
            </li>
          </ul>
        </div>
        <div className="lg:p-8 p-2 lg:h-1/2 lg:w-1/2">
          <ChartDefault />
        </div>
        <div className="lg:p-8 p-2 lg:m-2 flex lg:flex-row justify-between flex-col lg:h-1/2 lg:w-full bg-blue-200 shadow-lg rounded-lg">
          <Image
            src="/img/zabka.png"
            width="700px"
            height="500px"
            objectFit="cover"
            className="shadow-lg rounded-lg"
          />
          <div className="flex flex-col m-2 p-2">
            <ul className="text-[30px] w-fit font-bold">
              <li>
                <span className="text-violet-500">2 500 000</span> customers
                daily
              </li>
              <li>
                <span className="text-violet-500">7 999</span> stores in Poland
              </li>
            </ul>
            <Image
              src="/img/zabkaInterior.jpg"
              width="400px"
              height="400px"
              objectFit="cover"
              className="shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* AUSTRIA BUSINESS POTENTIAL */}

      <div className="flex lg:flex-row flex-wrap lg:p-2 bg-blue-100">
        <div className="lg:p-8 p-2 lg:h-1/2 lg:w-1/2">
          <h1 className="text-6xl font-bold">AUSTRIA BUSINESS POTENTIAL</h1>
          <p className="text-[18px] mt-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos maxime molestias numquam maiores nobis eius architecto
            in aut modi sequi. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Pariatur iure ex porro enim iste tempore optio
            voluptate obcaecati ducimus, asperiores veniam excepturi
            repudiandae? Ad eum aut vitae quae illo ipsam corrupti atque fugiat
            architecto. Reiciendis ipsam iure molestias iusto, nulla ad sunt
            tenetur officia nisi atque, consequuntur unde non totam.
          </p>
          <p className="text-[18px] mt-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos maxime molestias numquam maiores nobis eius architecto
            in aut modi sequi. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Pariatur iure ex porro enim iste tempore optio
            voluptate obcaecati ducimus, asperiores veniam excepturi
            repudiandae? Ad eum aut vitae quae illo ipsam corrupti atque fugiat
            architecto. Reiciendis ipsam iure molestias iusto, nulla ad sunt
            tenetur officia nisi atque, consequuntur unde non totam.
          </p>
        </div>
        <div className="lg:p-8 p-2 lg:h-1/2 lg:w-1/2">
          <ChartDefault />
        </div>
        <div className="lg:p-8 p-2 lg:m-2 flex lg:flex-row justify-between flex-col lg:h-1/2 lg:w-full bg-blue-200 shadow-lg rounded-lg">
          <Image
            src="/img/zabka.png"
            width="700px"
            height="500px"
            objectFit="cover"
            className="shadow-lg rounded-lg"
          />
          <div className="flex flex-col m-2 p-2">
            <ul className="text-[30px] w-fit font-bold">
              <li>
                <span className="text-violet-500">2 500 000</span> customers
                daily
              </li>
              <li>
                <span className="text-violet-500">7 999</span> stores in Poland
              </li>
            </ul>
            <Image
              src="/img/zabkaInterior.jpg"
              width="400px"
              height="400px"
              objectFit="cover"
              className="shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
