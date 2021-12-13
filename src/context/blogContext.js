import React, { createContext, useEffect, useState } from "react";

import Client from "../Client";

const blogContext = createContext({
  posts: [],
  recents: [],
  loading: false,
  preLoading: false,
  setPreLoading: () => { }
});

export default blogContext;

export const BlogContextProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [recents, setRecents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [preLoading, setPreLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Client.fetch(
      `*[_type == "post"] {
        title,
        body,
        slug,
        _createdAt,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
    )
      .then((data) => {
        data.sort(
          (a, b) =>
            new Date(b._createdAt).valueOf() - new Date(a._createdAt.valueOf())
        );
        setPosts(data);

        if (data.length > 5) {
          const newPost = data.slice(0, 5);
          setRecents(newPost);
        } else {
          setRecents(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <blogContext.Provider
      value={{
        posts: posts, recents: recents, loading: loading, preLoading: preLoading, setPreLoading: setPreLoading
      }}
    >
      {props.children}
    </blogContext.Provider>
  );
};
