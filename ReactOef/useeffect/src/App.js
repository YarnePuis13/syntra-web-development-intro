/*
HAAL CATEGORIES VAN CHUCK NORRIS
ZET ZE IN EEN LIJST
WANNEER ER WORDT GEKLIKT OP EEN CATEGORY, DISPLAY EEN RANDOM JOKE ERVAN
*/
import { useState, useEffect } from "react";
import Categories from "./Categories";
import Joke from "./Joke";

function App() {
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="App">
      <h1>Oefening useEffect</h1>
      <Joke joke={joke} />
      <Categories dispCategories={categories} setJoke={setJoke} />
    </div>
  );
}

export default App;
