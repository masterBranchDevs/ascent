import React from "react";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
};

export default NotFound;
