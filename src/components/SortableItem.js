import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function SortableItem(props) {
  // props.dr
  // JavaScript
  // console.log(props);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.item.id });
  //console.log({ setNodeRef });
  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div key={props.item.id} className="taskContainer">
        <li key={props.item.id} className="task">
          {props.item.name}
        </li>
      </div>
    </div>
  );
}
