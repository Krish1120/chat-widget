import React from "react";
import { Typography } from "@mui/material";
import coffee from "../../../assets/coffee.png";
import styles from "../ChatWidget.module.css";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const HomeTab = () => {
  return (
    <div className={styles["tab-panel-wrapper"]}>
      <div className={styles["home-panel-container"]}>
        <img
          src={coffee}
          alt="coffee"
          crossOrigin="anonymous"
          className={styles["coffee-img"]}
        />
        <Typography className={styles.heading1}>Hi there 👋</Typography>
        <Typography className={styles.heading2}>How can we help?</Typography>
        <div className={styles.card4} style={{ flexDirection: "row" }}>
          <div>
            <Typography className={styles["sub-heading2"]}>
              Send us a message
            </Typography>
            <Typography className={styles["sub-heading3"]}>
              We typically reply in under 15 minutes
            </Typography>
          </div>
          <SendIcon className={styles["send-icon-black"]} />
        </div>
        <div className={styles.card4}>
          <div
            className={styles["form-control"]}
            style={{ backgroundColor: "#eee" }}
          >
            <input
              type="text"
              placeholder="Search for help"
              className={`${styles["input-field"]} ${styles["form-background"]}`}
            />
            <SearchIcon className={styles["search-icon"]} />
          </div>
          <div className={styles.card5}>
            <Typography className={styles["sub-heading3"]}>
              Sync with Slack
            </Typography>
            <ChevronRightIcon className={styles.icon} />
          </div>
          <div className={styles.card5}>
            <Typography className={styles["sub-heading3"]}>
              Step by step tutorial for Admins
            </Typography>
            <ChevronRightIcon className={styles.icon} />
          </div>
          <div className={styles.card5}>
            <Typography className={styles["sub-heading3"]}>
              Sync with Calendar
            </Typography>
            <ChevronRightIcon className={styles.icon} />
          </div>
          <div className={styles.card5}>
            <Typography className={styles["sub-heading3"]}>
              Delete a user
            </Typography>
            <ChevronRightIcon className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
