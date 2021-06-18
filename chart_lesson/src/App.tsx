import React from "react";
import "./App.css";
import LinePlot from "./components/LinePlot";
import PiePlot from "./components/PiePlot";
import BarPlot from "./components/BarPlot";
import RaderPlot from "./components/RaderPlot";
import BubblePlot from "./components/BubblePlot";

const App: React.FC = () => {
  return (
    <div className="App">
      <LinePlot />
      <PiePlot />
      <BarPlot />
      <RaderPlot />
      <BubblePlot />
    </div>
  );
};

export default App;
