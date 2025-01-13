import React from "react";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <h1>
            <a className="logo" href="index.html">
              logo
            </a>
          </h1>
          <ul>
            <li>
              <ul>
                <li>
                  <a href="/">home</a>
                </li>
                <li>
                  <a href="/about">about</a>
                </li>
                <li>
                  <a href="/exp">work</a>
                </li>
                <li>
                  <a href="/project">project</a>
                </li>
                <li>
                  <a href="/contact">contact</a>
                </li>
              </ul>
            </li>
            <li>
              <DropdownMenu />
              {/* <div className="dropdown-center">
                <div
                  className="hamburger "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-offset="0,30"
                >
                  <a href="/" className="hamburger-button">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      문의 게시판
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      관리자 로그인
                    </a>
                  </li>
                </ul>
              </div> */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
