import { Route, Routes, Redirect, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Discover from "./pages/Discover";
import "./App.css";
import Footer from "./common/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/directory" element={<Discover />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
