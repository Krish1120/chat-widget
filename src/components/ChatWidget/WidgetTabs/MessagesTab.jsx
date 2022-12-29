import React from "react";
import styles from "../ChatWidget.module.css";
import {
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  Divider,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { setNewChat } from "../../../redux/NewChatReducer";

const MessagesTab = () => {
  const { messages } = useSelector((state) => state.chats);
  const dispatch = useDispatch();

  return (
    <div className={styles["panel-container"]}>
      <div className={styles.topbar}>
        <Typography className={styles["sub-heading"]}>Messages</Typography>
      </div>
      {messages?.length > 0 ? (
        <div className={styles["message-container"]}>
          <div
            className={`${styles["sendus-container"]} ${styles["sendus-fixed"]}`}
          >
            <Typography>Send us a message</Typography>
            <SendIcon className={styles["send-icon"]} />
          </div>
        </div>
      ) : (
        <div className={styles["message-container"]}>
          <CommentIcon className={styles["nomessage-icon"]} />
          <Typography className={styles["sub-heading5"]}>
            No messages
          </Typography>
          <Typography className={styles["sub-heading3"]}>
            Messages from the team will be shown here
          </Typography>
          <div
            className={styles["sendus-container"]}
            // onClick={() => {
            //   dispatch(setNewChat(true));
            // }}
          >
            <Typography>Send us a message</Typography>
            <SendIcon className={styles["send-icon"]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesTab;
