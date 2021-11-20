import React, { createContext, useEffect, useState } from "react";

import Client from "../Client";

const blogContext = createContext({
  posts: [],
  recents: [],
});

export default blogContext;

export const BlogContextProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [recents, setRecents] = useState([]);

  useEffect(() => {
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
        data.forEach((d) => {
          console.log(new Date(d._createdAt).valueOf());
        });
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
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <blogContext.Provider value={{ posts: posts, recents: recents }}>
      {props.children}
    </blogContext.Provider>
  );
};
