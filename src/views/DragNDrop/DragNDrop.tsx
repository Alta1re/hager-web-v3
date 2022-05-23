import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import DroppableContainer from "components/DroppableContainer/DroppableContainer";
import DragableItem from "components/DragableItem/DragableItem";

// material-ui components
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import classes from "./DragNDrop.module.css";
import { RootState } from "store/store";
import { addList, addItem } from "store/listReducer";

import { useTranslation } from "utils/i18n";

interface IList {
  title: string;
  items: string[];
}

const DragNDrop = () => {
  const lists = useSelector((state: RootState) => state.list);

  const [title, setTitle] = useState("");
  const [item, setItem] = useState("");

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const addListHandler = () => {
    dispatch(addList({ title }));
  };

  const addItemHandler = () => {
    dispatch(addItem({ item }));
  };

  return (
    <div className={classes.Container}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontFamily: "Charmonman-bold",
              textShadow: "1px 1px 1px black",
            }}
            color="#ffffff"
            variant="h1"
          >
            {t("DRAG_N_DROP")}
          </Typography>
        </Grid>
        {lists.lists.map((list: IList, index: number) => {
          return (
            <Grid key={"list-" + index} item xs={12} sm={10} md={8} lg={6}>
              <DroppableContainer
                header={lists.lists[index].title}
                id={index.toString()}
              >
                {lists.lists[index].items.map(
                  (listItem: string, key: number) => {
                    return (
                      <DragableItem
                        id={`list${index}-${key}`}
                        key={`list${index}-${key}`}
                        listId={index.toString()}
                      >
                        {listItem}
                      </DragableItem>
                    );
                  }
                )}
              </DroppableContainer>{" "}
            </Grid>
          );
        })}

        <div className={classes.LeftControls}>
          <Paper style={{ padding: "20px" }}>
            <Typography variant="h5">{t("ADD_LIST")}</Typography>
            <div className={classes.Form}>
              <TextField
                label={t("TITLE")}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Button variant="contained" onClick={addListHandler}>
                {t("SUBMIT")}
              </Button>
            </div>
          </Paper>
        </div>
        <div className={classes.RightControls}>
          <Paper style={{ padding: "20px" }}>
            <Typography variant="h5">{t("ADD_ITEM")}</Typography>
            <div className={classes.Form}>
              <TextField
                label={t("CONTENT")}
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
              <Button variant="contained" onClick={addItemHandler}>
                {t("SUBMIT")}
              </Button>
            </div>
          </Paper>
        </div>
      </Grid>
    </div>
  );
};

export default DragNDrop;
