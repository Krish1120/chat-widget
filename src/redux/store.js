import { configureStore } from "@reduxjs/toolkit";
import ChatsReducer from "./ChatsReducer";
import NewChatReducer from "./NewChatReducer";

export const store = configureStore({
  reducer: {
    chats: ChatsReducer,
    newChat: NewChatReducer,
  },
});
