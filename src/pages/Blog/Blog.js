import React, { useContext } from "react";

import BlogCard from "./BlogCard/BlogCard";

import blogContext from "../../context/blogContext";

import Spinner from "../../UI/Spinner/Spinner";

import styles from "./Blog.module.css";
import Meta from "../../components/Meta/Meta";

export default function Blog() {
  const { posts } = useContext(blogContext);

  return (
    <>
      <Meta title="blog" description="Blog for KRD consulting servicee" />
      <div className={styles.pageHeader}>
        <h1>KRD BLOG</h1>
      </div>
      {!posts.length ? (
        <Spinner />
      ) : (
        <div className={`container ${styles.Blog__Grid}`}>
          {posts.map((post) => (
            <BlogCard key={post.slug.current} post={post} />
          ))}
        </div>
      )}
    </>
  );
}
