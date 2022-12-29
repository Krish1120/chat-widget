import React from "react";
import styles from "../ChatWidget/ChatWidget.module.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { IconButton, Typography, Avatar } from "@mui/material";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";

const ChatWindow = () => {
  return (
    <div className={styles["chat-panel-container"]}>
      <div className={styles["chat-topbar"]}>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <div>
          <Typography className={styles["sub-heading"]}>Cafe</Typography>
          <div>
            <Avatar alt="Stefan" src={avatar1} />
            <Avatar alt="Klaus" src={avatar2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
