import React, { useState } from "react";
import PropTypes from "prop-types";
import "./navigation.css"; // Import the updated CSS file

export const Navigation = ({ currentTab, onClickTab, smoothScroll }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getClassName = (tab) =>
    `nav-link ${currentTab === tab ? "active" : ""}`;

  const handleClick = (tab, e) => {
    e.preventDefault(); // Prevent default anchor behavior
    onClickTab(tab); // Change the current tab
    const target = document.querySelector(`#${tab}`); // Find target section by ID
    if (target) {
      smoothScroll.animateScroll(target); // Smooth scroll to target
    }
  };

  // Toggle dropdown for "Contact Us"
  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent navigation
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown menu
  };

  return (
    <nav id="menu" className="navbar">
      <div className="logo-container">
        <a href="#home" onClick={(e) => handleClick("home", e)}>
          <img src="/images/logo.png" alt="Logo" className="logo-img" />
        </a>
        <a
          className="logo-text page-scroll"
          href="#home"
          onClick={(e) => handleClick("home", e)}
        >
          OPS ENTERTAINMENT QA
        </a>
      </div>

      <ul className="navbar-nav">
        <li className={getClassName("home")}>
          <a
            href="#home"
            className="page-scroll"
            onClick={(e) => handleClick("home", e)}
          >
            Home
          </a>
        </li>
        <li className={getClassName("squad")}>
          <a
            href="#squad"
            className="page-scroll"
            onClick={(e) => handleClick("squad", e)}
          >
            Squad
          </a>
        </li>
        <li className={getClassName("reports")}>
          <a
            href="#reports"
            className="page-scroll"
            onClick={(e) => handleClick("reports", e)}
          >
            Reports
          </a>
        </li>
        <li className={getClassName("devices")}>
          <a
            href="#portfolio"
            className="page-scroll"
            onClick={(e) => handleClick("devices", e)}
          >
            Devices
          </a>
        </li>
        <li className={getClassName("testsuites")}>
          <a
            href="#testsuites"
            className="page-scroll"
            onClick={(e) => handleClick("testsuites", e)}
          >
            Test Suites
          </a>
        </li>
        <li className={getClassName("trainings")}>
          <a
            href="#team"
            className="page-scroll"
            onClick={(e) => handleClick("trainings", e)}
          >
            Trainings
          </a>
        </li>
        {/* Contact Us with Dropdown */}
        <li
          className={`${getClassName("contact")} dropdown`}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <a
            href="#contact"
            className="page-scroll dropdown-link"
            onClick={toggleDropdown}
          >
            Contact Us
            <span className="dropdown-icon">▼</span>
          </a>
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <a
                  href="https://comcast.enterprise.slack.com/archives/C069NQJ1MNG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/img/slack.png"
                    alt="Slack"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "8px",
                    }}
                  />
                  Slack
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  currentTab: PropTypes.string.isRequired,
  onClickTab: PropTypes.func.isRequired,
  smoothScroll: PropTypes.object.isRequired,
};