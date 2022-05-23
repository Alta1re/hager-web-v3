import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ILists {
  lists: { title: string; items: string[] }[];
}

const initialState: ILists = {
  lists: [
    { title: "First list", items: ["firstListItemOne", "firstListItemTwo"] },
    { title: "Second list", items: ["secondListItemOne", "secondListItemTwo"] },
  ],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    moveItem: (state, payload) => {
      const listId = parseInt(payload.payload.listId);
      const index = parseInt(payload.payload.itemId.split("-")[1]);
      const receiverId = parseInt(payload.payload.receiverId);
      const updatedLists = [...state.lists];
      updatedLists[receiverId].items.push(state.lists[listId].items[index]);
      updatedLists[listId].items.splice(index, 1);
    },
    addList: (state, payload) => {
      const updatedLists = [...state.lists];
      updatedLists.push({ title: payload.payload.title, items: [] });
      state.lists = updatedLists;
    },
    addItem: (state, payload) => {
      state.lists[0].items.push(payload.payload.item);
    },
  },
});

export const { moveItem, addList, addItem } = listSlice.actions;

export default listSlice.reducer;
