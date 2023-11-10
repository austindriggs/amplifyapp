import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Home from './Components/Home';
import Contact from './Components/Contact';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <br/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/card" element={<Card />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
