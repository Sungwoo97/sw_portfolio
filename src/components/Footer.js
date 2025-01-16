import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="footer_head">
          <h2 class="">
            <a href="index.html" class="logo"></a>
          </h2>
          <ul class="icons">
            <li>
              <a href="">
                <img src="../img/footer_email.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="../img/footer_github.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="../img/footer_notion.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="../img/footer_instagram.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <ul class="bottom_nav">
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">WORK</a>
          </li>
          <li>
            <a href="">PROJECT</a>
          </li>
          <li>
            <a href="">CONTACT</a>
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
