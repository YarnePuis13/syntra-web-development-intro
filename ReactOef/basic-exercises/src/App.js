import Input from "./Input";
import ListTodos from "./ListTodos";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>Basic Exercises</h1>
      <h2>TodoApp</h2>
      <Input />
      <ListTodos />
    </div>
  );
}

export default App;
