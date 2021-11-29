import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import styles from "./BlogCard.module.css";

export default function BlogCard({ post }) {
  const title = post.title.substr(0, 100);
  const { _createdAt } = post;

  const date = new Date(_createdAt).toDateString();
  return (
    <div>
      <div className={styles.BlogCard}>
        <img src={post.mainImage.asset.url} alt="krd blog" />
        <div className={styles.Blog__text}>
          <h2>{title}....</h2>
          <div className={styles.Blog__detail}>
            <span>Temi</span>
            <span>{date}</span>
          </div>
          <div className={styles.button__div}>
            <Link
              to={`${post.slug.current}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button variant="outlined" color="secondary">
                View Detail
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
