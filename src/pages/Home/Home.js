import React, { useEffect, useContext } from "react";
import blogContext from "../../context/blogContext";

import WOW from "wowjs";

import hero from "../../assets/images/hero.png";
import FullWidthTabs from "../../components/Tab/Tab";
import BlogLink from "./BlogLink/BlogLink";
import Meta from "../../components/Meta/Meta";

import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Home() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  const { recents } = useContext(blogContext);

  const ServiceCard = (props) => {
    return (
      <div className={props.className}>
        <i className="fas fa-adjust"></i>
        <h2>{props.title}</h2>
      </div>
    );
  };

  return (
    <div>
      <div className={styles.hero__container}>
        <Meta
          title="KRD Consulting || Lorem ipsum dolor sit amet."
          description="First class consultancy service"
        />
        <div className={`${styles.hero} flex container`}>
          <div
            className={`${styles.hero__text} wow animate__animated animate__backInLeft `}
            data-wow-delay="0.25s"
          >
            <h1 className={styles.hero__caption}>
              We Make Your <span>Business Growth</span> Our Priority
            </h1>
            <p>
              Get the Best Outsourcing (Recruitment), Head Hunting, Training and
              Development, Company Restructuring and Strategic Realignment
              Service For Your Business.
            </p>
            <button className={styles.learn__more}>Learn More</button>
          </div>
          <img
            src={hero}
            alt="services"
            className={`${styles.hero__image} wow animate__animated animate__backInRight`}
          />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#4FB78A"
          fill-opacity="1"
          d="M0,288L60,288C120,288,240,288,360,256C480,224,600,160,720,144C840,128,960,160,1080,170.7C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <div className="about__us__container">
        <div className={`${styles.about__us} container`}>
          <h1>About Us</h1>
          <div className="flex">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80"
              alt="about krd consulting"
              className="wow animate__animated animate__fadeInLeftBig"
            />
            <p className="wow animate__animated animate__fadeInRightBig">
              KR&D consulting was incorporated in 2004 and has been providing
              financial advisory services to small and medium scale
              enterprises(SME).
              <br />
              Currently KR&D consulting is focused on providing core human
              resources or people-centered solutions to a wide spectrum of
              businesses in Nigeria and Africa in general.
              <br />
              Our core competencies are in the area of outsourcing(recruitment),
              head-hunting, training and development, company restructuring and
              strategic realignment. Our head office is situated at Road 2,
              Ikota shopping complex VGC Lekki, Lagos, Nigeria.
              <br />
              Our Strength is our people with diversified background of wealth
              and experience in various sectors of the Nigerian economy
              especially in finance and banking, telecommunications, ICT, real
              sector, oil and gas, public sector.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.services__container}>
        <div className={`${styles.services} container`}>
          <h1>Our Services</h1>
          <div className={styles.services__grid}>
            <div
              className={`${styles.service} wow animate__animated animate__zoomIn`}
            >
              <i className="fas fa-adjust"></i>
              <h2>Finance House</h2>
            </div>
            <div
              className={`${styles.service} wow animate__animated animate__zoomIn`}
            >
              <i className="fas fa-adjust"></i>
              <h2>Real Estate</h2>
            </div>
            <div
              className={`${styles.service} wow animate__animated animate__zoomIn`}
            >
              <i className="fas fa-adjust"></i>
              <h2>Human Resource</h2>
            </div>
            <div
              className={`${styles.service} wow animate__animated animate__zoomIn`}
            >
              <i className="fas fa-adjust"></i>
              <h2>MultiChoice Branded Store Dealers</h2>
            </div>
            <ServiceCard
              title="messing around"
              className={`${styles.service} wow animate__animated animate__zoomIn`}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className={styles.text__center}>INFO</h1>
        <FullWidthTabs />
      </div>
      <div className="container">
        <h1 className={styles.text__center}>POSTS</h1>
        {recents.map((recent) => (
          <BlogLink key={recent.slug.current} post={recent} />
        ))}
        <Link to="/blog" style={{ color: "inherit", textDecoration: "none" }}>
          <Button color="secondary" variant="contained">
            See All
          </Button>
        </Link>
      </div>
    </div>
  );
}
