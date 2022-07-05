import { useState } from "react";
import DoughnutChart from "./components/DoughnutChart";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";
import RadarChart from "./components/RadarChart";
import PolarChart from "./components/PolarChart";

const App = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.name.slice(1)),
    datasets: [
      {
        label: "Users Balances",
        data: UserData.map((data) => data.balance),
        backgroundColor: [
          // "#ba231d",
          // "#022e1f",
          // "#280d5f",
          // "#915623",
          "#e82c24",
          "#04724d",
          "#6320ee",
          "#f5a562",
          "#f6aba7",
          "#cde3db",
          "#e0d2fc",
          "#fce9d8"

        ],
        borderColor: "#313131",
        borderWidth: 0.5,
      },
    ],
  });

  return (
    <div className="charts">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <DoughnutChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <RadarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PolarChart chartData={userData} />
      </div>
    </div>
  )
}

export default App
