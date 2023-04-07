import { useContext } from "react";
import TodoContext from "../context/todo";
import CatFooter from "./CatFooter";
import "./TodoList.css";
import TodoTask from "./TodoTask";

import { DndContext, closestCenter, useDroppable } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function TodoList({ handleToggleForm }) {
  const { data, setData } = useContext(TodoContext);

  const handelDragEnd = (event) => {
    const { active, over } = event;

    // if (active.id !== over.id) {
    //   const newData = JSON.parse(JSON.stringify(data));

    //   newData.map((column, i) => {
    //     const activeIndex = column.itemsData.findIndex(
    //       (item) => item.id === active.id
    //     );

    //     if (activeIndex === -1) return;

    //     const overIndex = column.itemsData.findIndex(
    //       (item) => item.id === over.id
    //     );

    //     const temp = column.itemsData[activeIndex];
    //     column.itemsData[activeIndex] = column.itemsData[overIndex];
    //     column.itemsData[overIndex] = temp;
    //     console.log(column);
    //     setData((items) => {
    //       const activeIndex = items.indexOf(active.id);
    //       const overIndex = items.indexOf(over.id);
    //       //if (activeIndex === -1 && activeIndex === undefined) return;
    //       items[i].itemsData = column.itemsData;
    //       return arrayMove(items, activeIndex, overIndex);
    //     });
    //   });
    // }
  };

  const dataItemSetter = (data) => {
    setData(data);
  };

  function Droppable(props) {
    const { setNodeRef } = useDroppable({ id: props.id.id });
    //console.log(props.children);
    return (
      <div ref={setNodeRef}>
        <div className="taskList">{props.children}</div>
      </div>
    );
  }

  const dataList = data.map((item) => {
    return (
      <ul key={item.id} className="cat">
        <div
          onClick={handleToggleForm}
          className={(item.id, "catHeading")}
          style={{ backgroundColor: item.color }}
        >
          {item.name}
        </div>
        <Droppable id={item} key={item.id}>
          <TodoTask
            key={item.id}
            item={item.itemsData}
            dataItemSetter={dataItemSetter}
          />
        </Droppable>
        <div className="catFooter">
          <CatFooter catId={item.id} />
        </div>
      </ul>
    );
  });

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handelDragEnd}>
      <SortableContext items={data} strategy={verticalListSortingStrategy}>
        <div className="catContainer">{dataList}</div>
      </SortableContext>
    </DndContext>
  );
}

export default TodoList;
