// import Header from "./Components/Header/Header";

import LineChart from "./Components/LineChart/LineChart";
import Navbar from "./Components/Navbar/Navbar";
import Phones from "./Components/Phones/Phones";
import PriceOptions from "./Components/PriceOptions/PriceOptions";

export default function App() {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      {/* <Header></Header> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </div>
  )
}