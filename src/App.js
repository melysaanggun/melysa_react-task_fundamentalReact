import React from "react";
import ToDoList from "./pages/ToDo/ToDoList";
import { data } from "./Data.js";

function App() {
  return (
    <ToDoList lists={data}/>
  );
}

export default App;
