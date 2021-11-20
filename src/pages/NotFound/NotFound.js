import styles from "./NotFound.module.css";

import errorImage from "../../assets/images/error-image.png";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.NotFound}>
      <img src={errorImage} alt="errorImage" />
      <div className={styles.text}>
        <h1>Sorry... page not found</h1>
        <p>Go back to homepage</p>
        <div className={styles.navigate_button}>
          <Link to="/" className={`${styles.link} ${styles.home}`}>
            Home
          </Link>
          <button className={`${styles.link} ${styles.back}`} onClick={goBack}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
