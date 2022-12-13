import Input from "./Input";
import TodoList from "./TodoList";
import { useState } from "react";

function App() {
  const [todo, setToDo] = useState([]);
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <Input todo={todo} />
      <TodoList />
    </div>
  );
}

export default App;
