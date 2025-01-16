import React from "react";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <h1>
            <a className="logo" href="/">
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
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
