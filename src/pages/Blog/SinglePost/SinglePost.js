import { useState, useEffect } from "react";
import { useParams } from "react-router";

import Spinner from "../../../UI/Spinner/Spinner";

import BlockContent from "@sanity/block-content-to-react";
import Meta from "../../../components/Meta/Meta";
import Client from "../../../Client";

import styles from "./SinglePost.module.css";

export default function SinglePost() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();

  useEffect(() => {
    Client.fetch(
      `
      *[slug.current == "${slug}"] {
        title, 
        body, 
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        },
      }
    `
    )
      .then((data) => {
        setPost(data[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className={`container ${styles.SinglePost}`}>
          <Meta title={`Blog || ${post.title}`} description={post.tilte} />
          {post.mainImage["asset"] && post.mainImage["asset"].url && (
            <img
              src={post.mainImage["asset"].url}
              alt="Krd consulting financial"
            />
          )}
          <h1>{post.title}</h1>
          <div className={styles.post__detail}>
            <span></span>
            <span>12/05/2021</span>
          </div>
          <div className={styles.block__content}>
            <BlockContent
              blocks={post.body}
              projectId="waetjrnj"
              dataset="production"
            />
          </div>
        </div>
      )}
    </div>
  );
}
