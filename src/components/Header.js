import React, { useState } from "react";
import "../styles/Header.css";
// const { Menu } = require("feather-icons");

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    console.log("clicked");

    let sideBarWrapper = document.getElementsByClassName(
      "cusNav-SideBar-wrapper"
    )[0];
    let sideBar = document.getElementsByClassName("cusNav-SideBar")[0];

    if (!isOpen) {
      sideBarWrapper.style.visibility = "visible";
      sideBarWrapper.style.opacity = "1";
      sideBar.style.width = "70%";

      setIsOpen(true);
    } else {
      setIsOpen(false);
      sideBarWrapper.style.visibility = "hidden";
      sideBarWrapper.style.opacity = "0";
      sideBar.style.width = "0";
    }
  };

  return (
    <div className="cusNav-wrapper">
      {/* ---Company name & logo---   */}
      <div className="cusNav-logo-name-wrapper">
        <img src="https://mykaasu.blr1.cdn.digitaloceanspaces.com/website/images/logo.png"></img>
        <h1>Mykaasu</h1>
      </div>
      {/* -----Menu list ----- */}
      <div className="cusNav-menu-wrapper">
        <ul>
          <li>Home</li>
          <li id="cusNav-Loans">
            <p>Loans</p>
            <div className="cusNav-drpdown">
              <p>Personal Loan</p>
              <p>Business Loan</p>
            </div>
          </li>
          <li>Investors</li>
          <li>Articles</li>
          <li>Careers</li>
          <li>Contact Us</li>
          <li>Tools</li>
        </ul>
      </div>
      {/* ---- Nav Button list ---- */}
      <div className="cusNav-navButtons-wrapper">
        <button>Profile</button>
        <button>Dashboard</button>
      </div>

      {/* ----Side Bar ---- */}
      <div className="cusNav-SideBar-icon" onClick={() => handleClose()}>
        <p>Menu</p>
      </div>

      <div className="cusNav-SideBar-wrapper" onClick={() => handleClose()}>
        <div className="cusNav-SideBar">
          <div className="cusNav-menu-sidebar-wrapper">
            <button
              className="cusNav-SideBar-close-btn"
              onClick={() => handleClose()}
            >
              Close
            </button>
            <ul>
              <li>Home</li>
              <li id="cusNav-Loans-sidebar">
                <p>Loans</p>
                <div className="cusNav-drpdown">
                  <p>Personal Loan</p>
                  <p>Business Loan</p>
                </div>
              </li>
              <li>Investors</li>
              <li>Articles</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Tools</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
