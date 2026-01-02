import { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import Main from './Components/Main';

function App() {
  const [category, setCategory] = useState("");

  return (
    <Router>
      <Header />
      <SearchBar category={category} setCategory={setCategory} />
      <Routes>
        <Route path="/" element={<Main category={category} />} />
      </Routes>
    </Router>
  );
}

export default App;
