import { useEffect, useState } from "react";

export default function SearchBar({ category, setCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("https://api.chucknorris.io/jokes/categories");
        const data = await response.json();
        setCategories(data); 
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategories();
  }, []);

  function handleChange(e) {
    setCategory(e.target.value); 
  }

  return (
    <div className="cntr">
      <div className="cntr-innr">
        <select value={category} onChange={handleChange}>
          <option value="">-- Select a category --</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
