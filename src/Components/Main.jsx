import { useEffect, useState } from "react";

export default function Main({ category }) {
  const [joke, setJoke] = useState("");
  
  async function fetchJoke() {
    try {
      const url = category
        ? `https://api.chucknorris.io/jokes/random?category=${category}`
        : "https://api.chucknorris.io/jokes/random";

      const response = await fetch(url);
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchJoke();
  }, [category]);

  return (
<div className="joke-title">
  <p className="joke-paragraph">{joke}</p>
  <div className="joke-container">
    <button onClick={fetchJoke} className="button-53">
      Get Another Joke
    </button>
  </div>
</div>

  );
}
