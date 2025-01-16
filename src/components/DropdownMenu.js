import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function DropdownMenu() {
  return (
    <div className="dropdown-center">
      <Dropdown className="hamburger">
        <Dropdown.Toggle
          id="dropdown-basic"
          className="hamburger-button"
          drop="down-centered"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu" drop="down-centered">
          <Dropdown.Item className="dropdown-item">문의 게시판</Dropdown.Item>
          <Dropdown.Item className="dropdown-item">관리자 로그인</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropdownMenu;
