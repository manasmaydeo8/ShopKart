import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Login from './Pages/Login'
import Register from './Pages/Register'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />


      </Routes>
      <Footer/>
    </>
  );
}

export default App;
