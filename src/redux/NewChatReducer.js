import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newChat: false,
};

export const newChatSlice = createSlice({
  name: "newChat",
  initialState,
  reducers: {
    setNewChat: (state, action) => {
      state.newChat = action.payload;
    },
  },
});

export const { setNewChat } = newChatSlice.actions;

export default newChatSlice.reducer;
