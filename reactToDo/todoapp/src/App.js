import Input from "./Input";
import List from "./List";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>To Do App</h1>
      <Input />
      <List />
    </div>
  );
}

export default App;
