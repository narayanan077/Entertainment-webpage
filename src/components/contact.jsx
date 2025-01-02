import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Hero Image Section */}
      <div className="hero-image-header">
        <img
          src="/img/P15.jpg"
          srcSet="/img/P15.jpg 1x, /img/P15@2x.jpg 2x, /img/P15@4x.jpg 4x"
          sizes="(min-width: 1200px) 1200px, (min-width: 768px) 768px, 100vw"
          alt="Header"
          className="header-image"
        />
      </div>

      {/* Team Members Section */}
      <div className="team-section">
        <h2 className="team-heading">Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/img/img1.png" alt="Jagadeesh" className="team-image" />
            <h3 className="team-member-name">Jagadeesh</h3>
            <p className="team-member-title">Manager</p>
            <p className="team-member-details">
              Jagadeesh has handling the Xumo New devices Squad. He specializes in agile methodologies and is passionate about leading projects to success.
            </p>
          </div>
          <div className="team-member">
            <img src="/img/img2.png" alt="Jeffry" className="team-image" />
            <h3 className="team-member-name">Jeffry</h3>
            <p className="team-member-title">Engineer</p>
            <p className="team-member-details">
              Jeffry is working with the Xumo new device steaming squad. He has worked in implementing the reports for the Grafana dashboard.
            </p>
          </div>
          <div className="team-member">
            <img src="/img/img3.png" alt="Ganesh" className="team-image" />
            <h3 className="team-member-name">Ganesh</h3>
            <p className="team-member-title">Engineer</p>
            <p className="team-member-details">
              Ganesh is working with Xumo new device squad. He works in developing the entertainment squad webpage.
            </p>
          </div>
          <div className="team-member">
            <img src="/img/img4.jpg" alt="Shenbaga" className="team-image" />
            <h3 className="team-member-name">Shenbaga</h3>
            <p className="team-member-title">Engineer</p>
            <p className="team-member-details">
            Shenbaga is working with Xumo new device squad. He works in developing the entertainment squad webpage.
            </p>
          </div>
        </div>
      </div>

      {/* Social Media Links Section */}
      <div className="social-media">
        <h2 className="social-media-heading">Reach Out to Us</h2>
        <div className="social-media-icons">
          <a
            href="https://comcast.enterprise.slack.com/archives/CB4SRD43W"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/slack.png" alt="Slack" className="social-icon" />
          </a>
          <a
            href="https://www.microsoft.com/en-in/microsoft-teams/group-chat-software"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/teams.png" alt="Teams" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
