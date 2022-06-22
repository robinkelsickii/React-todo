import React, {useState} from "react";
import './App.css'

import Header from "./Components/Header";
import Todo from './Components/Todo'
import TodoList from "./Components/TodoList";
import data from './data.json'

function App() {
const [toDoList, setToDoList] = useState(data)
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task };
    });
    setToDoList(mapped);
  }
  return (
    <div className="App">
      <Header />
      <TodoList toDoList={toDoList} />
    </div>
  );
}

export default App;
