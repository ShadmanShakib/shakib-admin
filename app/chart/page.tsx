"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ChartFour from "@/components/Charts/ChartFour";
import ChartOne from "@/components/Charts/ChartOne";
import ChartThree from "@/components/Charts/ChartThree";
import ChartTwo from "@/components/Charts/ChartTwo";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
const rangeData = [
  {
    day: "05-01",
    temperature: [-1, 10],
  },
  {
    day: "05-02",
    temperature: [2, 15],
  },
  {
    day: "05-03",
    temperature: [3, 12],
  },
  {
    day: "05-04",
    temperature: [4, 12],
  },
  {
    day: "05-05",
    temperature: [12, 16],
  },
  {
    day: "05-06",
    temperature: [5, 16],
  },
  {
    day: "05-07",
    temperature: [3, 12],
  },
  {
    day: "05-08",
    temperature: [0, 8],
  },
  {
    day: "05-09",
    temperature: [-3, 5],
  },
];
const Chart = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">{/* <ChartFour /> */}</div>
        {/* <ChartOne />
        <ChartTwo />
        <ChartThree />
         */}
        <AreaChart
          width={730}
          height={250}
          data={rangeData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis dataKey="day" />
          <YAxis />
          <Area dataKey="temperature" stroke="#8884d8" fill="#8884d8" />
          <Tooltip />
        </AreaChart>
      </div>
    </>
  );
};

export default Chart;
