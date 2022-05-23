import React, { ReactNode, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store/store";

import { moveItem } from "store/listReducer";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import classes from "./DroppableContainer.module.css";

interface IDroppableProps {
  header: string;
  children: ReactNode;
  id: string;
}

const DroppableContainer = (props: IDroppableProps) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const lists = useSelector((state: RootState) => state.list);

  const dispatch = useDispatch();

  const dropHandler = (e: React.DragEvent) => {
    const itemId = e.dataTransfer.getData("item");
    const listId = e.dataTransfer.getData("list");
    const receiverId = props.id;
    dispatch(moveItem({ itemId, listId, receiverId }));
    setIsDragOver(false);
  };

  const dragLeaveHandler = (e: React.DragEvent) => {
    setIsDragOver(false);
  };

  const dragOverHandler = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
    e.dataTransfer.dropEffect = "move";
  };

  const dragEnterHandler = (e: React.DragEvent) => {
    e.dataTransfer.dropEffect = "move";
  };

  return (
    <div
      className={classes.Container}
      id={`${props.header}`}
      onDragOver={dragOverHandler}
      onDragLeave={dragLeaveHandler}
      onDragEnter={dragEnterHandler}
      onDrop={dropHandler}
    >
      <Paper style={{ padding: "20px" }}>
        <header>
          <h2>{props.header}</h2>
        </header>
        <ul
          className={isDragOver ? classes.DragOver : classes.ListContainer}
          style={{
            minWidth: "500px",
            boxShadow: "1px 1px 1px black",
            padding: 0,
          }}
        >
          {props.children}
        </ul>
      </Paper>
    </div>
  );
};

export default DroppableContainer;
