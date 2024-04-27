import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Discover from "./pages/Discover";
import "./App.css";
import Footer from "./common/Footer";
import Page from "./Page";
import SingleWallet from "./pages/SingleWallet";

function App() {
  return (
    <>
      <div style={{ minHeight: "97vh" }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/directory" element={<Discover />} />
            <Route path="/wallets/:slug" element={<SingleWallet />} />
            <Route path="/wallet-address" element={<Page />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
