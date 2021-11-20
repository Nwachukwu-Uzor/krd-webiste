import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={`container ${styles.footer}`}>
        <div className={styles.footer_link}>
          <h2>About Us</h2>
          <p>
            KR&D consulting was incorporated in 2004 and has been providing
            financial advisory services to small and medium scale
            enterprises(SME).
          </p>
        </div>
        <div className={styles.footer_link}>
          <h2>Information Links</h2>
          <ul className={styles.links}>
            <li>
              <Link to="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.link}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className={styles.link}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/blog" className={styles.link}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contacts" className={styles.link}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer_link}>
          <h2>Contact Details</h2>
          <ul className={styles.links}>
            <li>krdconsulting71@gmail.com</li>
            <li> +234-705-557-020-1</li>
          </ul>
          <div className={`${styles.copyright} container`}>
            <div>
              <div className={styles.icons}>
                <ul className={styles.footer_icon}>
                  <li>
                    <a href="https://www.google.com">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
