import { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import Main from './Components/Main';
import Contact from "./Components/Contact";
import Success from "./Components/Success";

function App() {
  const [category, setCategory] = useState("");

  return (
    <Router>
      <Header />
      <SearchBar category={category} setCategory={setCategory} />
      <Routes>
        <Route path="/home" element={<Main category={category} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
