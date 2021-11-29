import React from "react";
import Meta from "../../components/Meta/Meta";

import styles from "./Services.module.css";

import finances from "../../assets/images/finances.jpg";
import realEstate from "../../assets/images/estate-image.jpeg";
import multiChoice from "../../assets/images/multichoice.jpg";
import humanResources from "../../assets/images/human-resources.jpg";
import training from "../../assets/images/training_krd.jpg";

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
                KR&D Court is one of the leading Real Estate service providers
                in Lagos located beside the prestigious Lagos Business School
                (LBS). At KR&D, we have exotic apartments for sale, short-let,
                renting(service apartments), heavily discounted to accommodate
                all, and sundry.
                <br />
                All apartments are furnished with modern furniture, modern
                kitchen equipment, and Jacuzzi baths with water heaters.
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
        <div className={styles.service__detail}>
          <h2>Training and Development </h2>
          <div className={styles.service__detail__grid}>
            <img src={training} alt="human resources" />
            <div className={styles.service__detail__text}>
              <p>
                <strong>Structural Learning Programme</strong>
                <br />
                To stand pout in todays highly competitive market , most
                businesses must undertake as a priority to re-evaluate their
                manpower needs. This can be done through training analysis and
                retraining to achieve high performance and attain corporal goals
                , continuous improved processing for sustainable growth and
                profitability.
              </p>
              <p>
                <strong>
                  Corporate restructuring and strategic realignment
                </strong>
                <br />
                We offer to act as a change agent by facilitating the
                restructuring and realignment of the corporate structure of most
                Organizations when our services are sought. We do in depth
                reorganization of processes , deliver procedure manuals and come
                up with the ideal corporate structure for stunted organizations.
                On retainership we facilitate implementation of our
                recommendations in policy and structures that bring about high
                performance in most organizations.
              </p>
              <p>
                <strong>
                  Leadership and Performance enhancement training.
                </strong>
                <br />
                We at KR&D consulting run leadership and performance enhancement
                training , Overseas in partnership with notable business Schools
                in the United Kingdom , US A and South Africa. The Objective is
                to equip middle and top level management professionals to give
                strong leadership and give direction to their various
                Organizations , which is a competitive and hazardous Business
                environment . We Also Organize strategic Seminars and retreats
                for our valuable clients. These courses are easily accessible at
                our publications in prominent media channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
