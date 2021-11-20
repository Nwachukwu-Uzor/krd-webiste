import React from "react";
import Meta from "../../components/Meta/Meta";

import styles from "./Services.module.css";

import finances from "../../assets/images/finances.jpg";
import realEstate from "../../assets/images/estate-image.jpeg";
import multiChoice from "../../assets/images/multichoice.jpg";
import humanResources from "../../assets/images/human-resources.jpg";

export default function Services() {
  return (
    <div>
      <Meta title="Services" description="KR&D services" />
      <h1 className={styles.services__header}>Our Services</h1>
      <img
        src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="kr & d services"
        className={styles.service__office}
      />
      <div className={`${styles.services__main} container`}>
        <div className={styles.service__detail}>
          <h2>Loan and Finance</h2>
          <div className={styles.service__detail__grid}>
            <img src={finances} alt="finances" />
            <div className={styles.service__detail}>
              <p>
                KR&D Consulting Ltd gives loan offers to business owners, salary
                earners, etc. Our interest rate is highly competitive and
                flexible. Our clients can access up to #10,000,000.00 (Ten
                Million Naira) on flexible payment duration. All loans are
                collateral tied or backed by a verifiable guarantor.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.service__detail}>
          <h2>Real Estate</h2>
          <div className={styles.service__detail__grid}>
            <img src={realEstate} alt="real estate services" />
            <div className={styles.service__detail}>
              <p>
                KR&D Consulting Ltd gives loan offers to business owners, salary
                earners, etc. Our interest rate is highly competitive and
                flexible. Our clients can access up to #10,000,000.00 (Ten
                Million Naira) on flexible payment duration. All loans are
                collateral tied or backed by a verifiable guarantor.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.service__detail}>
          <h2>MultiChoice Branded Store Dealers </h2>
          <div className={styles.service__detail__grid}>
            <img src={multiChoice} alt="multichoice krd" />
            <div className={styles.service__detail}>
              <p>We sell ,install,and Subscribe Dstv and Gotv</p>
            </div>
          </div>
        </div>
        <div className={styles.service__detail}>
          <h2>Human Resources </h2>
          <div className={styles.service__detail__grid}>
            <img src={humanResources} alt="human resources" />
            <div className={styles.service__detail__text}>
              <p>
                We offer consummate and passionate skills in delivering quality
                labor supplies to blue-chip organizations to enable them focus
                on their core businesses. We engage in Testing, Written, and
                Oral Interviews to sieve out the best performing candidates and
                deliver the same to our clients. Headhunting: This is a highly
                specialized service often based on the request to secure
                highly-priced top professionals in whatever matrix - quality
                from within and outside Nigeria.
                <br />
                As part of the Human Resource we provide :
                <br />
                <strong>-</strong> Recruitment & selection.
                <br />
                <strong>-</strong> Performance management.
                <br />
                <strong>-</strong> Learning & development.
                <br />
                <strong>-</strong> Succession planning.
                <br />
                <strong>-</strong> Compensation and benefits.
                <br />
                <strong>-</strong> Human Resources Information Systems.
                <br />
                <strong>-</strong> Human Resources Information Systems.
                <br />
                <strong>-</strong> HR data and analytics.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
