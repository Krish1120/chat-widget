import React, { useState } from "react";
import styles from "./ChatWidget.module.css";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Tab, Tabs, Typography, Grow } from "@mui/material";
import PropTypes from "prop-types";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CommentIcon from "@mui/icons-material/Comment";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import HelpIcon from "@mui/icons-material/Help";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import HomeTab from "./WidgetTabs/HomeTab";
import Helptab from "./WidgetTabs/HelpTab";
import MessagesTab from "./WidgetTabs/MessagesTab";
import { useDispatch, useSelector } from "react-redux";
import ChatWindow from "../ChatWindow/ChatWindow";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ChatWidget = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(0);
  const { newChat } = useSelector((state) => state.newChat);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const widgetDisplayHandler = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };
  return (
    <>
      <Grow
        in={visible}
        style={{ transformOrigin: "bottom right 0" }}
        timeout={500}
      >
        <div className={`${styles["widget-window"]}`}>
          {newChat ? (
            <ChatWindow />
          ) : (
            <Box sx={{ width: "100%" }}>
              <Box className={styles["tabs-container"]}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  TabIndicatorProps={{
                    style: {
                      display: "none",
                    },
                  }}
                  sx={{
                    "& button": {
                      padding: 2,
                      borderRadius: 2,
                      margin: "8px 0",
                      textTransform: "none",
                      color: "black",
                    },
                    "& .Mui-selected": {
                      color: "black!important",
                    },
                  }}
                  aria-label="basic tabs example"
                >
                  <Tab
                    label={
                      <>
                        {value === 0 ? <HomeIcon /> : <HomeOutlinedIcon />}
                        <Typography>Home</Typography>
                      </>
                    }
                    {...a11yProps(0)}
                  />
                  <Tab
                    label={
                      <>
                        {value === 1 ? (
                          <CommentIcon />
                        ) : (
                          <CommentOutlinedIcon />
                        )}
                        <Typography>Messages</Typography>
                      </>
                    }
                    {...a11yProps(1)}
                  />
                  <Tab
                    label={
                      <>
                        {value === 2 ? (
                          <HelpIcon />
                        ) : (
                          <HelpOutlineOutlinedIcon />
                        )}
                        <Typography>Help</Typography>
                      </>
                    }
                    {...a11yProps(2)}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <HomeTab />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <MessagesTab />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Helptab />
              </TabPanel>
            </Box>
          )}
        </div>
      </Grow>
      <div
        className={`${styles.avatar} ${styles["transition-3"]}`}
        onClick={widgetDisplayHandler}
      >
        {visible ? (
          <ChevronRightIcon
            className={`${styles["animation-arrow"]} ${styles["avatar-icon"]}`}
          />
        ) : (
          <QuestionAnswerIcon
            className={`${styles["animation-chat"]} ${styles["avatar-icon"]}`}
          />
        )}
      </div>
    </>
  );
};

export default ChatWidget;
