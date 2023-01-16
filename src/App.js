import "./App.css";
import Home from "./components/home";
import GiftCards from "./components/GiftCards";
import Menu from "./components/Menu";

import Navbar from "./components/navbar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Rewords from "./components/rewords";
import Hotcoffee from "./components/hotcoffee";
import HotTeas from "./components/HotTeas.js";
import Test from "./components/menuPage";
import FooterMenu from "./components/FooterMenu";
import Previous from "./components/Previous";
import Navbar2 from "./components/navbar2";
function App() {
  return (
    <div className=" font-Nunito ">
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/menu" element={<Navbar2 />} /> */}
          <Route path="/" element={<Navbar />}>
            {/* <Route path="/" element={<Navbar2 />}> */}
            <Route path="/menu" element={<Menu />}>
              {/* <Route path="/menu" element={<Navbar2 />} /> */}
              <Route path="/menu" element={<Test />} />
              <Route path="hot-coffee" element={<Hotcoffee />} />
              <Route path="hot-teas" element={<HotTeas />} />
              {/* </Route> */}
            </Route>
            {/* <Route path="/previous" element={<Previous />} /> */}
            <Route path="/rewords" element={<Rewords />} />
            <Route path="/giftcards" element={<GiftCards />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
