import React from "react";

import { Link } from "react-router-dom";

import styles from "./BlogLink.module.css";

const BlogLink = ({ post }) => {
  const title = post.title.substr(0, 100);
  return (
    <div className={styles.blogLink__container}>
      <Link className={styles.blogLink} to={`blog/${post.slug.current}`}>
        {title}.................
      </Link>
    </div>
  );
};

export default BlogLink;
