import PropTypes from "prop-types";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { autoPlay } from "react-swipeable-views-utils";

import mission from "../../assets/images/mission.png";
import values from "../../assets/images/values.png";
import vision from "../../assets/images/vision.png";
import { Divider } from "@mui/material";

import styles from "./Tab.module.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", marginTop: "20px" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        // indicatorColor="primary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Mission" {...a11yProps(0)} />
        <Tab label="Vision" {...a11yProps(1)} />
        <Tab label="Values" {...a11yProps(2)} />
      </Tabs>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        interval={10000}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className={`${styles.about__statement} container`}>
            <h2>Our Mission</h2>
            <Divider sx={{ marginBottom: "5px" }} />
            <div className={styles.about__statement__grid}>
              <img src={mission} alt="Krd Consulting mission" />
              <p>
                To continuously provide core HR solutions to our target
                businesses through our efficient and confident people levering
                latest technologies to match the business needs of our valued
                clients resulting in financial sustainability and profitability.
              </p>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className={`${styles.about__statement} container`}>
            <h2>Our Vision</h2>
            <Divider sx={{ marginBottom: "5px" }} />
            <div className={styles.about__statement__grid}>
              <img src={vision} alt="Krd Consulting mission" />
              <p>
                To be a leading Management Consulting Firm in Trophical Africa
                within a decade offering core HR management solutions to a
                wide-range of businesses; affecting their bottom-line.
              </p>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div className={`${styles.about__statement} container`}>
            <h2>Our Values</h2>
            <Divider sx={{ marginBottom: "5px" }} />
            <div className={styles.about__statement__grid}>
              <img src={values} alt="Krd Consulting mission" />
              <p className={styles.core__value}>
                Our core value is summed up by the character and conduct of our
                people in dealing with our choice client and summed up in the
                word
                <b> PIPER</b>:
                <ul className={styles.core__value}>
                  <li>
                    <b>-</b> Professionalism
                  </li>
                  <li>
                    <b>-</b> Integrity
                  </li>
                  <li>
                    <b>-</b> Passion
                  </li>
                  <li>
                    <b>-</b> Empathy
                  </li>
                  <li>
                    <b>-</b> Reliability
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </TabPanel>
      </AutoPlaySwipeableViews>
    </Box>
  );
}
