import React, { useState, useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import "./themes.css"; // Import your theme styles

import { Navigation } from "./components/navigation";
import { Header } from "./components/header";

import { Home } from "./components/home";
import { Squad } from "./components/Squad";
import Reports from "./components/Reports";
import { Devices } from "./components/devices";
import Testsuites from "./components/testsuites"; // Correct import statement
import { Trainings } from "./components/trainings";
import Contact from "./components/contact";
import JsonData from "./data/data.json";

import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

// Initialize Smooth Scroll
const smoothScroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
  offset: 70, // Adjust if you have a fixed header
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [currentTab, setCurrentTab] = useState("home");

  useEffect(() => {
    setLandingPageData(JsonData);

    // You can set initial messages for the chatbot here
    addResponseMessage("Welcome to our website! We are currently in development phase, will notify you soon once it done");
  }, []);

  const handleNavigationClick = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div>
      <Navigation
        currentTab={currentTab}
        onClickTab={handleNavigationClick}
        smoothScroll={smoothScroll}
      />
      <div className="content-container">
        {currentTab === "home" && (
          <>
            <Header data={landingPageData.Header} />
            <Home data={landingPageData.Home} />
          </>
        )}
        {currentTab === "squad" && <Squad data={landingPageData.Squad} />}
        {currentTab === "reports" && <Reports data={landingPageData.Reports} />}
        {currentTab === "devices" && <Devices data={landingPageData.Devices} />}
        {currentTab === "testsuites" && (
          <Testsuites data={landingPageData.Testsuites} />
        )}
        {currentTab === "trainings" && (
          <Trainings data={landingPageData.Trainings} />
        )}
        {currentTab === "contact" && <Contact data={landingPageData.Contact} />}
      </div>
      {/* Add the chatbot widget at the bottom only for home tab */}
      {currentTab === "home" && (
        <Widget
          title="Your Virtual Assistant"
          subtitle="We are here to help"
        />
      )}
    </div>
  );
};

export default App;
