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
