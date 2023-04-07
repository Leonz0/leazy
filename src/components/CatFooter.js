import React from "react";
import { useState, useContext } from "react";
import TodoContext from "../context/todo";
import "./CatFooter.css";

function CatFooter({ catId }) {
  const [btnAddItem, setBtnAddItem] = useState(true);
  const [btnSaveItem, setBtnSaveButton] = useState(false);
  const [textArea, setTextArea] = useState("");

  const {
    category,
    setCategory,
    taskTodo,
    setTaskTodo,
    data,
    setData,
    toggleForm,
    setToggleForm,
    // btnAddItem,
    // setBtnAddItem,
    // btnSaveItem,
    // setBtnSaveButton,
  } = useContext(TodoContext);

  const toggleAddSaveBtns = () => (
    setBtnSaveButton(!btnSaveItem), setBtnAddItem(!btnAddItem)
  );

  const addItem = (event) => {
    toggleAddSaveBtns();
    // console.log(event);
    return <div className="add-Item-Container"></div>;
  };

  const saveItem = () => {
    // toggleAddSaveBtns();
    // if (textArea == "") return;
    // // setTaskTodo([
    // //   ...taskTodo,
    // setData([
    //     ...data,
    //   itemsData:[{
    //     id: data.itemsData.length + 1,
    //     name: textArea,
    //     description: "It is for testing On Hold sample 1",
    //     importance: 3,
    //     // in: catId,
    //   }],
    // ]);

    // setTextArea("");
    console.log("xxx");
  };

  const onNewTaskInput = (event) => {
    event.stopPropagation();
    setTextArea(event.target.value);
  };

  return (
    <div>
      {btnAddItem && (
        <span onClick={addItem} className="btn-add-item">
          + Add Item
        </span>
      )}
      {btnSaveItem && (
        <div className="newTask-container">
          <textarea
            className="task-textarea"
            onChange={onNewTaskInput}
            value={textArea}
            placeholder="Type new task"
          ></textarea>
          <span onClick={saveItem} className="btn-save-item">
            Save Item
          </span>
        </div>
      )}
    </div>
  );
}

export default CatFooter;
