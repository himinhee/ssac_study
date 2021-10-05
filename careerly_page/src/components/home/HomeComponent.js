import React from "react";
import homeCSS from "../../css/home.module.css";
import PostContainer from "../common/container/PostContainer";

function HomeComponent() {
  return (
    <div className={homeCSS.containerFluid}>
      <div className={homeCSS.containerCenter}>
        <PostContainer />
        <PostContainer />
        <PostContainer />
      </div>
    </div>
  );
}

export default HomeComponent;
