import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      axis: "y",
      label: "Demo bar plot",
      backgroundColor: "#20b2aa",
      borderColor: "transparent",
      hoverBackgroundColor: "#5f9ea0",
      data: [50, 30, 70, 15, 50, 0, 100],
    },
  ],
};

const options = {
  indexAxis: "y",
};

const BarPlot: React.FC = () => {
  return (
    <div>
      <Bar data={data} type />
      <Bar data={data} options={options} type />
    </div>
  );
};

export default BarPlot;
