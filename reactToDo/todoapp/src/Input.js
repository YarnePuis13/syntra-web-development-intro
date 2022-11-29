import { useState } from "react";

const Input = ({ todos, setTodos }) => {
  const [{ input, setinput }] = useState("");
  const onClick = () => {};

  return (
    <>
      <input
        value={input}
        className="inptToevoegen"
        placeholder="type your task..."
      ></input>
      <button className="btnToevoegen" onClick={onClick}>
        Toevoegen
      </button>
    </>
  );
};

export default Input;
