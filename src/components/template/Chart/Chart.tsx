import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { BartData, ChartData } from "@/utils/Data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const option = {};
  return (
    <div className=" flex flex-row items-center h-full w-full justify-around mt-5 text-black rounded-2xl shadow-2xl">
      <div className="bg-zinc w-[50%]">
        <Line options={option} data={ChartData} />
      </div>
      <div className="bg-zinc w-[50%]">
        <Bar options={option} data={BartData} />
      </div>
    </div>
  );
};

export default Chart;
