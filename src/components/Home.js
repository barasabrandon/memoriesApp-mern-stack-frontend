import React from "react";
import { useSelector } from "react-redux";
import PostItemContainer from "./PostItemContainer";

function Home() {
  const { postsItems } = useSelector((store) => store.post);
  console.log(postsItems);
  return (
    <>
      <div className="row justify-content-center mt-4 mb-4">
        {postsItems.map((item, i) => (
          <PostItemContainer key={i} {...item} />
        ))}
      </div>
    </>
  );
}

export default Home;
