import React, { ReactNode } from "react";

interface IDroppableProps {
  id: string;
  listId: string;
  children?: ReactNode;
}

const DragableItem = (props: IDroppableProps) => {
  const dragStartHandler = (e: React.DragEvent) => {
    e.dataTransfer.effectAllowed = "all";
    const id = (e.target as HTMLDivElement).id;
    e.dataTransfer.setData("item", id);
    e.dataTransfer.setData("list", props.listId);
  };

  return (
    <li
      id={props.id}
      draggable
      onDragStart={(e) => dragStartHandler(e)}
      style={{ border: "1px solid grey" }}
    >
      {props.children}
    </li>
  );
};

export default DragableItem;
