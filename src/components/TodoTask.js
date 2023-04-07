import React from "react";
import { useContext } from "react";
import TodoContext from "../context/todo";
import "./TodoTask.css";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { SortableItem } from "./SortableItem";

function TodoTask({ item, dataItemSetter }) {
  const { data, setData } = useContext(TodoContext);

  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragEnd(event) {
    const { active, over } = event;
    console.log(active);
    console.log(over);

    if (active.id !== over.id) {
      const newData = JSON.parse(JSON.stringify(data));

      newData.map((column, i) => {
        const activeIndex = column.itemsData.findIndex(
          (item) => item.id === active.id
        );
        const overIndex = column.itemsData.findIndex(
          (item) => item.id === over.id
        );

        const temp = column.itemsData[activeIndex];
        column.itemsData[activeIndex] = column.itemsData[overIndex];
        column.itemsData[overIndex] = temp;
        dataItemSetter((items) => {
          console.log(item);
          const activeIndex = items[i].itemsData.indexOf(active.id);
          const overIndex = items[i].itemsData.indexOf(over.id);

          items[i].itemsData = column.itemsData;
          return arrayMove(items, activeIndex, overIndex);
          //     console.log(activeIndex);
          //     console.log(overIndex);

          //console.log(items[i].itemsData);
          // console.log(active.id);
          // const oldIndex = item.findIndex((f) => f.id === active.id);
          // const newIndex = item.findIndex((f) => f.id === over.id);
          // //if (oldIndex || newIndex === -1) return;
          // // const oldIndex = items.findIndex(({ id }) => id === active.id);
          // // const newIndex = items.findIndex(({ id }) => id === over.id);
          // console.log(oldIndex);
          // console.log(newIndex);
          // items[0].itemsData = item;
          // return arrayMove(items, oldIndex, newIndex);
        });
      });
    }

    console.log(data);
  }

  const task = item.map((item) => {
    //if (inId === item.in)
    //console.log(item.itemsData);
    return (
      // <DndContext
      //   key={item.id + 2}
      //   collisionDetection={closestCenter}
      //   onDragEnd={handelDragEnd}
      // >
      //   <SortableContext
      //     items={data}
      //     strategy={verticalListSortingStrategy}
      //   >
      //     <div key={item.id} className="taskContainer">
      //       <li key={item.id + 1} className="task">
      //         {item.name}
      //       </li>
      //     </div>
      //   </SortableContext>
      // </DndContext>
      <SortableItem key={item.id} item={item} />
    );
  });

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={item} strategy={verticalListSortingStrategy}>
        {task}
      </SortableContext>
    </DndContext>
  );
}

export default TodoTask;
