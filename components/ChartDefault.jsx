import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const ChartDefault = () => {
  const [principal, setPrincipal] = useState(0);
  const [sum, setSum] = useState(0);
  const [dataset, setDataset] = useState([]);
  const [RPT, setRPT] = useState(25);
  const [PPT, setPPT] = useState(250);
  const [yearOne, setYearOne] = useState(30000);
  const [yearTwo, setYearTwo] = useState(40000);
  const [yearThree, setYearThree] = useState(50000);
  const [yearFour, setYearFour] = useState(60000);
  const [yearFive, setYearFive] = useState(70000);

  let dollarUSLocale = Intl.NumberFormat("en-US");

  function calculate(
    RPT,
    PPT,
    yearOne,
    yearTwo,
    yearThree,
    yearFour,
    yearFive
  ) {
    let data = [];
    const year1_rev = RPT * yearOne;
    const year2_rev = RPT * yearTwo;
    const year3_rev = RPT * yearThree;
    const year4_rev = RPT * yearFour;
    const year5_rev = RPT * yearFive;

    let totalRev = year1_rev + year2_rev + year3_rev + year4_rev + year5_rev;

    let sumOfTxn =
      parseInt(yearOne) +
      parseInt(yearTwo) +
      parseInt(yearThree) +
      parseInt(yearFour) +
      parseInt(yearFive);

    let totalPrincipal = PPT * sumOfTxn;

    data.push(year1_rev, year2_rev, year3_rev, year4_rev, year5_rev);

    setPrincipal(totalPrincipal);
    setSum(totalRev);
    setDataset(data);
  }

  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="flex flex-col">
        <div className="flex">
          <div className="flex flex-col m-2">
            <label className="text-[10px]">RPT</label>
            <input
              type="number"
              placeholder="RPT"
              className="focus:outline-none w-[50px] p-1 shadow-md rounded-lg text-gray-500 text-sm"
              value={RPT}
              onChange={(e) => setRPT(e.target.value)}
            />
          </div>

          <div className="flex flex-col m-2">
            <label className="text-[10px]">PPT</label>
            <input
              type="number"
              placeholder="PPT"
              className="focus:outline-none w-[50px] p-1 shadow-md rounded-lg text-gray-100 text-sm bg-red-300"
              value={PPT}
              onChange={(e) => setPPT(e.target.value)}
            />
          </div>
        </div>

        <div className="flex lg:flex-row md:flex-row flex-wrap">
          <div className="flex flex-col m-2">
            <label className="text-[10px]">Year 1 txn</label>
            <input
              type="number"
              placeholder=""
              className="focus:outline-none w-[80px] p-1 shadow-md rounded-lg text-gray-500 text-sm"
              value={yearOne}
              onChange={(e) => setYearOne(e.target.value)}
            />
          </div>

          <div className="flex flex-col m-2">
            <label className="text-[10px]">Year 2 txn</label>
            <input
              type="number"
              placeholder=""
              className="focus:outline-none w-[80px] p-1 shadow-md rounded-lg text-gray-500 text-sm"
              value={yearTwo}
              onChange={(e) => setYearTwo(e.target.value)}
            />
          </div>

          <div className="flex flex-col m-2">
            <label className="text-[10px]">Year 3 txn</label>
            <input
              type="number"
              placeholder=""
              className="focus:outline-none w-[80px] p-1 shadow-md rounded-lg text-gray-500 text-sm"
              value={yearThree}
              onChange={(e) => setYearThree(e.target.value)}
            />
          </div>

          <div className="flex flex-col m-2">
            <label className="text-[10px]">Year 4 txn</label>
            <input
              type="number"
              placeholder=""
              className="focus:outline-none w-[80px] p-1 shadow-md rounded-lg text-gray-500 text-sm"
              value={yearFour}
              onChange={(e) => setYearFour(e.target.value)}
            />
          </div>

          <div className="flex flex-col m-2">
            <label className="text-[10px]">Year 5 txn</label>
            <input
              type="number"
              placeholder=""
              className="focus:outline-none w-[80px] p-1 shadow-md rounded-lg text-gray-500 text-sm"
              value={yearFive}
              onChange={(e) => setYearFive(e.target.value)}
            />
          </div>
        </div>

        <button
          className="bg-red-400 w-[150px] rounded-lg p-1 text-white font-bold"
          onClick={() => {
            calculate(
              RPT,
              PPT,
              yearOne,
              yearTwo,
              yearThree,
              yearFour,
              yearFive
            );
          }}
        >
          Fire
        </button>
      </div>

      <div className="relative">
        <Bar
          data={{
            labels: [
              ["Y1 = " + yearOne],
              ["Y2 = " + yearTwo],
              ["Y3 = " + yearThree],
              ["Y4 = " + yearFour],
              ["Y5 = " + yearFive],
            ],
            datasets: [
              {
                label: "Revenue in $",
                data: dataset,
                backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                borderColor: ["rgba(255, 99, 132, 1)"],
                borderWidth: 1,
              },
            ],
          }}
          options={{ responsive: true }, {aspectRatio: 1.5 }}
          className="lg:h-20 lg:w-30"
        />
      </div>

      <div className="flex flex-col">
        <div>
          <p className="text-lg">
            Total Revenue: ${" "}
            <span className="font-bold">{dollarUSLocale.format(sum)}</span>
          </p>
        </div>
        <div>
          <p className="text-lg">
            Total Principal: ${" "}
            <span className="font-bold">
              {dollarUSLocale.format(principal)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChartDefault;
