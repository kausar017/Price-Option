// import Header from "./Components/Header/Header";

import Navbar from "./Components/Navbar/Navbar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";

export default function App() {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      {/* <Header></Header> */}
      <PriceOptions></PriceOptions>
      
    </div>
  )
}