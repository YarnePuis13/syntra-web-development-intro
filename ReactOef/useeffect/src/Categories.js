import { useState, useEffect } from "react";

const Categories = ({ dispCategories, setJoke }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (selectedCategory) {
      console.log(selectedCategory);
      fetch(
        `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`
      )
        .then((res) => res.json())
        .then((data) => setJoke(data.value));
    }
  }, [selectedCategory]);

  return (
    <div>
      {dispCategories.map((category) => {
        return (
          <p onClick={() => setSelectedCategory(category)} key={category}>
            {category}
          </p>
        );
      })}
    </div>
  );
};

export default Categories;
