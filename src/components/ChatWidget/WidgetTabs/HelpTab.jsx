import React from "react";
import {
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  Divider,
} from "@mui/material";
import styles from "../ChatWidget.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Helptab = () => {
  return (
    <div className={styles["panel-container"]}>
      <div className={styles.topbar}>
        <Typography className={styles["sub-heading"]}>Help</Typography>
        <div className={styles["form-control"]}>
          <input
            type="text"
            placeholder="Search for help"
            className={styles["input-field"]}
          />
          <SearchIcon className={styles["search-icon"]} />
        </div>
      </div>
      <div className={styles["help-content-container"]}>
        <div className={styles.card2}>
          <Typography className={styles["sub-heading2"]}>
            4 Collections
          </Typography>
        </div>
        <Divider />
        <div className={styles.card3}>
          <div>
            <Typography className={styles["sub-heading2"]}>
              Onboarding guide
            </Typography>
            <Typography className={styles["sub-heading3"]}>
              Find out how cafe works 👋
            </Typography>
            <Typography className={styles["sub-heading4"]}>
              12 Articles
            </Typography>
          </div>
          <ChevronRightIcon className={styles.icon} />
        </div>
        <div className={styles.card3}>
          <div>
            <Typography className={styles["sub-heading2"]}>
              Admin guide
            </Typography>
            <Typography className={styles["sub-heading3"]}>
              All the info to master cafe 💪
            </Typography>
            <Typography className={styles["sub-heading4"]}>
              7 Articles
            </Typography>
          </div>
          <ChevronRightIcon className={styles.icon} />
        </div>
        <div className={styles.card3}>
          <div>
            <Typography className={styles["sub-heading2"]}>
              SSO, HRIS, SCIM
            </Typography>
            <Typography className={styles["sub-heading3"]}>
              Discover all the options ⚙️
            </Typography>
            <Typography className={styles["sub-heading4"]}>
              6 Articles
            </Typography>
          </div>
          <ChevronRightIcon className={styles.icon} />
        </div>
        <div className={styles.card3}>
          <div>
            <Typography className={styles["sub-heading2"]}>
              Account & Billing
            </Typography>
            <Typography className={styles["sub-heading3"]}>
              All the info you need about 💸
            </Typography>
            <Typography className={styles["sub-heading4"]}>
              3 Articles
            </Typography>
          </div>
          <ChevronRightIcon className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Helptab;
