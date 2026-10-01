import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Footer />
    </>
  );
}

export default App;
