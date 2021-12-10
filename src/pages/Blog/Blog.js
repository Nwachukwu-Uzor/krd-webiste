import React, { useContext, useState } from "react";

import BlogCard from "./BlogCard/BlogCard";
import Pagination from "./Pagination";

import blogContext from "../../context/blogContext";

import Spinner from "../../UI/Spinner/Spinner";

import styles from "./Blog.module.css";
import Meta from "../../components/Meta/Meta";

export default function Blog() {
  const { posts, loading } = useContext(blogContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(20);

  const indexOfLastPost = currentPage * postPerPage;

  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <>
      <Meta title="blog" description="Blog for KRD consulting servicee" />
      <div className={styles.pageHeader}>
        <h1>KRD BLOG</h1>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className={`${styles.Blog__Grid}`}>
            {currentPosts.map((post) => (
              <BlogCard key={post.slug.current} post={post} />
            ))}
          </div>
          <Pagination
            postsPerPage={postPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
      )}
    </>
  );
}
