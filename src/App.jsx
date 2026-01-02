import { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Main from './Components/Main';
import Contact from "./Components/Contact";
import Success from "./Components/Success";

function App() {
  const [category, setCategory] = useState("");

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Main category={category} setCategory={setCategory} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
