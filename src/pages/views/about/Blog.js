import React from "react";

const Blog = () => {
  return (
    <div className="blog">
      <a
        href="https://jagged-periwinkle-b90.notion.site/174906281d3380d3a4a3f0be8e09c88b?pvs=4"
        target="_blank"
      >
        <img src="./img/notion.svg" width="50" alt="notion" />
      </a>
      <a href="https://github.com/Sungwoo97" target="_blank">
        <img src="./img/github.svg" width="50" alt="github" />
      </a>
      <a
        href="https://docs.google.com/document/d/1Vm1GM5CeF7pqzwP2-ePtYEHTCFmmTraze0INLYcPLpk/edit?usp=drive_link"
        target="_blank"
      >
        <img src="./img/address.svg" width="50" alt="이력서" />
      </a>
    </div>
  );
};

export default Blog;
