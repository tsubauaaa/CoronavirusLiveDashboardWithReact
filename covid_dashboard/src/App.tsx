import React from "react";
import "./App.css";
import Cards from "./features/covid/Cards/Cards";
import Chart from "./features/covid/Chart/Chart";
import PieChart from "./features/covid/PeiChart/PeiChart";
import SwitchCountry from "./features/covid/SwitchCountry/SwitchCountry";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cards />
        <Chart />
        <PieChart />
        <SwitchCountry />
      </header>
    </div>
  );
}

export default App;
