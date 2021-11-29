import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/images/KRD.svg";

import styles from "./Header.module.css";

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const close = () => setClick(false);

  return (
    <div className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <div className={styles.logo__div}>
          <Link to="/">
            <img src={logo} alt="KRD consulting logo" />
          </Link>
          <div className={styles.icon} onClick={handleClick}>
            {!click ? (
              <i className="fas fa-bars"></i>
            ) : (
              <i className="fas fa-times"></i>
            )}
          </div>
        </div>
        <div className={`${styles.navlink__container} ${click && styles.open}`}>
          <NavLink
            to="/"
            exact
            className={({ isActive }) =>
              isActive
                ? `${styles.nav__item} ${styles.active}`
                : styles.nav__item
            }
            onClick={close}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? `${styles.nav__item} ${styles.active}`
                : styles.nav__item
            }
            onClick={close}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? `${styles.nav__item} ${styles.active}`
                : styles.nav__item
            }
            onClick={close}
          >
            Services
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive
                ? `${styles.nav__item} ${styles.active}`
                : styles.nav__item
            }
            onClick={close}
          >
            Contact
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? `${styles.nav__item} ${styles.active}`
                : styles.nav__item
            }
            onClick={close}
          >
            Blog
          </NavLink>
        </div>
      </div>
    </div>
  );
}
