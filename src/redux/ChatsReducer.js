import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    sendNewMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    sendMessage: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { sendNewMessage, sendMessage } = chatsSlice.actions;

export default chatsSlice.reducer;
