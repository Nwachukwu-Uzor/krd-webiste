import React from "react";

import styles from "./PageHeader.module.css";

export default function PageHeader(props) {
  return (
    <div className={styles.pageHeader}>
      <h1>{props.pageTitle}</h1>
    </div>
  );
}
