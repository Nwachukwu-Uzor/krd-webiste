import React, { useEffect } from "react";

import WOW from "wowjs";

import AccordionItem from "../../components/Accordion/AccordioItem";
import Meta from "../../components/Meta/Meta";

import styles from "./About.module.css";

import mission from "../../assets/images/mission.png";
import vision from "../../assets/images/vision.png";
import values from "../../assets/images/values.png";

import Prince from "../../assets/images/mr_prince.jpeg";
import Uche from "../../assets/images/mr_uche.png";

import { Divider } from "@mui/material";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function About() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <div>
      <Meta title="About" description="About KR&D consultancy" />
      <PageHeader pageTitle="About Us" />
      <div className={`${styles.about__container} container`}>
        <p className={styles.about__text}>
          KR&D consulting was incorporated in 2004 and has been providing
          financial advisory services to small and medium scale
          enterprises(SME).
          <br />
          Currently KR&D consulting is focused on providing core human resources
          or people-centered solutions to a wide spectrum of businesses in
          Nigeria and Africa in general.
          <br />
          Our core competencies are in the area of outsourcing(recruitment),
          head-hunting, training and development, company restructuring and
          strategic realignment. Our head office is situated at Road 2, Ikota
          shopping complex VGC Lekki, Lagos, Nigeria.
          <br />
          Our Strength is our people with diversified background of wealth and
          experience in various sectors of the Nigerian economy especially in
          finance and banking, telecommunications, ICT, real sector, oil and
          gas, public sector.
        </p>
      </div>
      <div className={`${styles.about__statement} container`}>
        <h2>Our Mission</h2>
        <div className="container">
          <Divider sx={{ marginBottom: "5px" }} />
        </div>
        <div className={styles.about__statement__grid}>
          <img src={mission} alt="Krd Consulting mission" />
          <p>
            To continuously provide core HR solutions to our target businesses
            through our efficient and confident people levering latest
            technologies to match the business needs of our valued clients
            resulting in financial sustainability and profitability.
          </p>
        </div>
      </div>
      <div className={`${styles.about__statement} container`}>
        <h2>Our Vision</h2>
        <div className="container">
          <Divider sx={{ marginBottom: "5px" }} />
        </div>
        <div className={styles.about__statement__grid}>
          <img src={vision} alt="Krd Consulting mission" />
          <p>
            To be a leading Management Consulting Firm in Trophical Africa
            within a decade offering core HR management solutions to a
            wide-range of businesses; affecting their bottom-line.
          </p>
        </div>
      </div>
      <div className={`${styles.about__statement} container`}>
        <h2>Our Values</h2>
        <div className="container">
          <Divider sx={{ marginBottom: "5px" }} />
        </div>
        <div className={styles.about__statement__grid}>
          <img src={values} alt="Krd Consulting mission" />
          <p>
            Our core value is summed up by the character and conduct of our
            people in dealing with our choice client and summed up in the word
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
      <div className={`${styles.management} container`}>
        <h2>Management Team</h2>
        <div className={styles.management__grid}>
          <img
            src={Prince}
            alt="Mr Uche KR&D consulting"
            className="wow animate__animated animate__backInLeft"
          />
          <p className="wow animate__animated animate__backInRight">
            <strong>Mr Prince Dimkpa PhD</strong> <br />
            <strong>Chief Executive Officer </strong> <br />
            Mr Prince Dimkpa serves as the chief executive officer of KR&D
            consulting. He was until recently the zonal business coordinator of
            Globacom Limited <br />
            He has over 25 years of post-graduate experience spanning Academia,
            Banking and Telecommunication with the last 16 years at top
            management <br />
            He has travelled widely and worked in many countries. He has until
            now worked at Econet wireless now Airtel and Standard Trust Bank now
            United Bank for Africa (UBA) where he was the pioneer Chief
            Executive Officer, Standard Trust Service Limited (a subsidiary of
            Standard Trust Bank) <br />
            He has attended several leadership courses in the United States
            especially in the Howard University, Washington DC, USA; in
            organizational communication. A polygot, Dr. Prince Dimkpa is
            happily married
          </p>
        </div>
        <div className={styles.management__grid}>
          <img
            src={Uche}
            alt="Mr Uche KR&D consulting"
            className="wow animate__animated animate__backInLeft"
          />
          <p className="wow animate__animated animate__backInRight">
            <strong>Mr Opara Ikechukwu Uche</strong> <br />
            <strong>General Manager Operations </strong> <br />
            Mr Opara Ikechukwu Uche serves as the General Manager Operations in
            KR&D Consulting Ltd. He is a Dynamic and Effective Management
            Professional with over 15yrs in Financial Sector. <br />
            He previously worked in FCMB as a Business Development Officer later
            moved to Union Bank of Nigeria where he became expert in banking
            settlement and funds transfer, Credit and loans management portfolio
            and general cash and tellering operations. <br />
            He got his first degree in Co-operative Economics and Management in
            Nnamdi Azikiwe University Awka and M.sc in Business Management Lagos
            state University Ojo He has attended several leadership courses both
            in private and public sector here in Nigeria and he is happily
            married
          </p>
        </div>
      </div>
      <h2 className={styles.About__Frequently__Asked}>
        Frequently Asked Question
      </h2>
      <div className="container">
        <Divider sx={{ marginBottom: "20px" }} />
      </div>
      <AccordionItem />
    </div>
  );
}
