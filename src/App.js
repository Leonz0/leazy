import "./App.css";
// import { useContext, useEffect } from "react";
// import TodoContext from "./context/todo";

// function App() {
//   const { category, setCategory } = useContext(TodoContext);

//   const showCategories = console.log();

//   return <div className="App">{showCategories}</div>;
// }

// export default App;

import { useContext } from "react";
import TodoContext from "./context/todo";
import TodoList from "./components/TodoList";

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function App() {
  const {
    toggleForm,
    setToggleForm,
    btnAddItem,
    setBtnAddItem,
    btnSaveItem,
    setBtnSaveButton,
  } = useContext(TodoContext);

  const handleToggleForm = () => {
    // if (toggleForm === false) return;
    // setToggleForm(true);
    setBtnAddItem(!btnAddItem);
    setBtnSaveButton(!btnSaveItem);
  };

  const handelDragEnd = (event) => {
    console.log(event);
  };

  return (
    // <DndContext collisionDetection={closestCenter} onDragEnd={handelDragEnd}>
    <div onClick={handleToggleForm} className="App">
      <TodoList handleToggleForm={handleToggleForm} />
    </div>
    // </DndContext>
  );
}

export default App;
