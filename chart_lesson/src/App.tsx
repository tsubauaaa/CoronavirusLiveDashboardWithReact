import React from "react";
import "./App.css";
// import LinePlot from "./components/LinePlot";
// import PiePlot from "./components/PiePlot";
// import BarPlot from "./components/BarPlot";
// import RaderPlot from "./components/RaderPlot";
// import BubblePlot from "./components/BubblePlot";
import MaterialUI from "./components/MaterialUI";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <LinePlot />
      <PiePlot />
      <BarPlot />
      <RaderPlot />
      <BubblePlot /> */}
      <MaterialUI />
    </div>
  );
};

export default App;
