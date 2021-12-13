import { Send } from "@mui/icons-material";
import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import Meta from "../../components/Meta/Meta";
import PageHeader from "../../components/PageHeader/PageHeader";

import styles from "./Contacts.module.css";

export default function Contacts() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.Contacts}>
      <Meta title="Contact" description="Contact Us" />
      <PageHeader pageTitle="Contacts" />
      <div className={`${styles.Contacts__Grid} container`}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <h2>Send us message</h2>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    className={styles.Contacts__Input}
                    sx={{ marginBottom: "20px" }}
                  />
                  <TextField
                    fullWidth
                    label="Address"
                    className={styles.Contacts__Input}
                    sx={{ marginBottom: "20px" }}
                  />
                  <TextField
                    fullWidth
                    label="Phone"
                    className={styles.Contacts__Input}
                    sx={{ marginBottom: "20px" }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="Message" multiline rows={8} fullWidth />
                  <Button
                    startIcon={<Send />}
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={{ marginTop: "20px", color: "#fff" }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={12} md={4}>
              <h2>Contact Details</h2>
              <h3>Address</h3>
              <p>Road 2, B53 ,Ikota Shopping Complex Ajah</p>
              <h2>We're Open</h2>
              <p>Mondays to Friday 8:00am to 5:00pm</p>
              <h2>Phone</h2>
              <p>+234-705-557-020-1</p>
            </Grid>
          </Grid>
        </form>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126865.11670050526!2d3.5302484041145075!3d6.453697712389015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf73c26bda569%3A0x474eac949d5ae329!2sKR%26D%20Consulting%20Ltd.!5e0!3m2!1sen!2sng!4v1634810094600!5m2!1sen!2sng"
        allowfullscreen=""
        loading="lazy"
        title="KR & D map"
      ></iframe>
    </div>
  );
}
