import React, { useEffect, useContext } from "react";
import blogContext from "../../context/blogContext";

import WOW from "wowjs";

import FullWidthTabs from "../../components/Tab/Tab";
import BlogLink from "./BlogLink/BlogLink";
import Meta from "../../components/Meta/Meta";

import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import SectionDivider from "./../../UI/SectionDivider/SectionDivider";

import aboutImage from '../../assets/images/office-bg.jpg';

const ServiceCard = (props) => {
  return (
    <div className={props.className}>
      <i className={props.icon}></i>
      <h2>{props.title}</h2>
    </div>
  );
};

const services = [
  { service: "Loan and Finance", icon: "fas fa-money-bill-wave" },
  { service: "Real Estate", icon: "fas fa-home" },
  { service: "HR Services", icon: "fas fa-people-carry" },
  { service: "Multichoice Retailer", icon: "fas fa-tv" },
];

export default function Home(props) {
  const { recents, preLoading, setPreLoading } = useContext(blogContext);

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();   
    const timer = setTimeout(() => setPreLoading(false), 2000);
  }, []);
  
  return (
    <div>
      <Meta
        title="KRD Consulting || Business Solutions"
        description="First class consultancy service"
      />
      <div className={styles.hero__container}>
        <div className={`${styles.hero} flex container`}>
          <div
            className={`${styles.hero__text} wow animate__animated animate__backInLeft `}
            data-wow-delay="0.25s"
          >
            <h1 className={styles.hero__caption}>
              We Make Your <span>Business Growth</span> Our Priority
            </h1>
            <p>
              KR&D Consulting Ltd gives loan offers to business owners, salary
              earners, etc. Our interest rate is highly competitive and
              flexible. Our clients can access up to #10,000,000.00 (Ten Million
              Naira) on flexible payment duration. All loans are collateral tied
              or backed by a verifiable guarantor.
            </p>
            <button className={styles.learn__more}>Learn More</button>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="rgb(17, 153, 94)"
          fill-opacity="0.6"
          d="M0,288L60,288C120,288,240,288,360,256C480,224,600,160,720,144C840,128,960,160,1080,170.7C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <div className="about__us__container">
        <div className={`${styles.about__us} container`}>
          <h1>About Us</h1>
          <div className="flex">
            <img
              src={aboutImage}
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
      <SectionDivider />
      <div className={styles.services__container}>
        <div className={`${styles.services} container`}>
          <h1>Our Services</h1>
          <div className={styles.services__grid}>
            {services.map((service) => (
              <ServiceCard
                key={service.service}
                title={service.service}
                icon={service.icon}
                className={`${styles.service} wow animate__animated animate__zoomIn`}
              />
            ))}
          </div>
        </div>
      </div>
      <SectionDivider />
      <div className="container">
        <h1 className={styles.text__center}>INFO</h1>
        <FullWidthTabs />
      </div>
      <SectionDivider />
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
