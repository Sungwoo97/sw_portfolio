import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_head">
          <h2 className="">
            <a href="/" className="logo"></a>
          </h2>
          <ul className="icons">
            <li>
              <a href="/" aria-label="email">
                <img src="../img/footer_email.svg" alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Sungwoo97"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <img src="../img/footer_github.svg" alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://jagged-periwinkle-b90.notion.site/174906281d3380d3a4a3f0be8e09c88b?pvs=4"
                target="_blank"
                rel="noreferrer"
                aria-label="notion"
              >
                <img src="../img/footer_notion.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="../img/footer_instagram.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <ul className="bottom_nav">
          <li>
            <a href="/" aria-label="HOME">
              HOME
            </a>
          </li>
          <li>
            <a href="#about" aria-label="ABOUT">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#exp" aria-label="WORK">
              WORK
            </a>
          </li>
          <li>
            <a href="#project" aria-label="PROJECT">
              PROJECT
            </a>
          </li>
          <li>
            <a href="#contact" aria-label="CONTACT">
              CONTACT
            </a>
          </li>
        </ul>
        <p>
          Thanks for visiting my Portfolio Website. <br />
          Copyright &copy; {new Date().getFullYear()} Sungwoo Nam. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
