import React from "react";

import { CircularProgress } from "@mui/material";

import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <CircularProgress size={60} />
    </div>
  );
};

export default Spinner;
