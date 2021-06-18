import React from "react";
import { Bubble } from "react-chartjs-2";

const data = {
  datasets: [
    {
      label: "React",
      backgroundColor: "#4169e1",
      borderColor: "transparent",
      data: [{ x: 20, y: 866, r: 6350000 / 100000 }],
    },
    {
      label: "Angular",
      backgroundColor: "#c71585",
      borderColor: "transparent",
      data: [{ x: 30, y: 389, r: 410000 / 100000 }],
    },
    {
      label: "Vue",
      backgroundColor: "#008080",
      borderColor: "transparent",
      data: [{ x: 10, y: 749, r: 1320000 / 100000 }],
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: "NPM donwloads comparison (global)",
    },
  },
  scales: {
    x: {
      min: 5,
      max: 35,
    },
    y: {
      min: 0,
      max: 1200,
    },
  },
};

const BubblePlot: React.FC = () => {
  return (
    <div>
      <Bubble data={data} options={options} type="bubble" />
    </div>
  );
};

export default BubblePlot;
