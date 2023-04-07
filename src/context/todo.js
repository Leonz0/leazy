import { createContext, useState, useCallback } from "react";
import axios from "axios";

const initialData = [
  {
    id: 1,
    name: "Backlog",
    color: "#7798AB",
    itemsData: [
      {
        id: 1,
        name: "Backlog sample 1",
        description: "It is for testing Backlog sample 1",
        importance: 3,
      },
      {
        id: 3,
        name: "Backlog sample 2",
        description: "It is for testing Backlog sample 2",
        importance: 4,
      },
      {
        id: 6,
        name: "Backlog sample 3",
        description: "It is for testing Backlog sample 3",
        importance: 4,
      },
    ],
  },
  {
    id: 2,
    name: "In Progress",
    color: "#F2CEE6",
    itemsData: [
      {
        id: 2,
        name: "In Progress 1",
        description: "It is for testing In Progress",
        importance: 1,
      },
      {
        id: 7,
        name: "In Progress 2",
        description: "It is for testing In Progress 2",
        importance: 1,
      },
    ],
  },
  {
    id: 3,
    name: "Complete",
    color: "#C3DBC5",
    itemsData: [
      {
        id: 4,
        name: "Complete sample 1",
        description: "It is for testing Complete sample 1",
        importance: 3,
      },
      {
        id: 8,
        name: "Complete sample 2",
        description: "It is for testing Complete sample 2",
        importance: 3,
      },
    ],
  },
  {
    id: 4,
    name: "On Hold",
    color: "#E8DCB9",
    itemsData: [
      {
        id: 5,
        name: "On Hold sample 1",
        description: "It is for testing On Hold sample 1",
        importance: 3,
      },
    ],
  },
];

const TodoContext = createContext();

function Provider({ children }) {
  const [btnAddItem, setBtnAddItem] = useState(true);
  const [btnSaveItem, setBtnSaveButton] = useState(false);

  const [toggleForm, setToggleForm] = useState(false);

  const [data, setData] = useState(initialData);

  //   const [taskTodo, setTaskTodo] = useState([
  //     {
  //       id: 1,
  //       name: "Backlog sample 1",
  //       description: "It is for testing Backlog sample 1",
  //       importance: 3,
  //       in: 1,
  //     },
  //     {
  //       id: 2,
  //       name: "In Progress 1",
  //       description: "It is for testing In Progress",
  //       importance: 1,
  //       in: 2,
  //     },
  //     {
  //       id: 3,
  //       name: "Backlog sample 2",
  //       description: "It is for testing Backlog sample 2",
  //       importance: 4,
  //       in: 1,
  //     },
  //     {
  //       id: 4,
  //       name: "Complete sample 1",
  //       description: "It is for testing Complete sample 1",
  //       importance: 3,
  //       in: 3,
  //     },
  //     {
  //       id: 5,
  //       name: "Backlog sample 1",
  //       description: "It is for testing On Hold sample 1",
  //       importance: 3,
  //       in: 4,
  //     },
  //   ]);

  const valueToShare = {
    btnAddItem,
    setBtnAddItem,
    btnSaveItem,
    setBtnSaveButton,
    toggleForm,
    setToggleForm,
    data,
    setData,
    // category,
    // setCategory,
    // taskTodo,
    // setTaskTodo,
  };

  return (
    <TodoContext.Provider value={valueToShare}>{children}</TodoContext.Provider>
  );
}

export { Provider };
export default TodoContext;
