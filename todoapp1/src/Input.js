import { useState } from "react";

const Input = (todo) => {
  const [inputValue, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const onClick = () => {
    todo = inputValue;
  };
  return (
    <>
      <input
        placeholder="Voeg een task toe"
        className="inputField"
        value={inputValue}
        onChange={handleChange}
      ></input>
      <button className="btnToevoegen" onClick={onClick}>
        Toevoegen
      </button>
    </>
  );
};

export default Input;
