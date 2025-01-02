import React from 'react';
import './Home.css';
import VideoSection from './VideoSection'; // Ensure this matches your export style
import NetFlixIcon from '../assets/icons/netflix.avif';
import YouTubeIcon from '../assets/icons/youtube.avif';
import DisneyIcon from '../assets/icons/disney.avif';
import PrimeIcon from '../assets/icons/prime.avif';
import AppleTVIcon from '../assets/icons/apple-tv.avif';
import MaxIcon from '../assets/icons/max.avif';
import PeacockIcon from '../assets/icons/peacock.avif';
import XumoPlayIcon from '../assets/icons/xumoplay.avif';
import HuluIcon from '../assets/icons/hulu.avif';
import SpotifyIcon from '../assets/icons/Spotify.avif';

export const Home = (props) => {
  const homeData = props.data && Array.isArray(props.data) && props.data.length > 0 ? props.data[0] : null;

  return (
    <div className="our-journey">
      <div className="streaming-section">
        {homeData && (
          <div className="section-title">
            <h1>{homeData.title}</h1>
          </div>
        )}

        {/* Entertainment Ecosystem Section */}
        <div className="content-description">
          <div className="text-section">
            <div className="custom-heading1">About Us</div>
            <p1>
              The Entertainment QA team is dedicated to enhancing device performance while continuously integrating new features. Their testing process spans multiple phases, including sprint testing, stable testing, and release testing, ensuring a robust and reliable product. Throughout each phase, identified bugs are thoroughly validated, contributing to the overall improvement of the device’s quality. The QA team’s comprehensive testing strategy guarantees that all features and enhancements are seamlessly integrated, ensuring the final product is fully optimized.
            </p1>
          </div>
          <div className="image-section">
            <img src="/img/Img5.avif" alt="Project 3" />
          </div>
        </div>

        {/* Devices Streamline Custom Heading */}
        <div className="devices-streamline-heading">
          <div className="custom-heading1">Devices Streamline</div>
        </div>

        <div className="streaming-stats">
          <div className="stat">
            <a
              href="https://www.xumo.com/en-GB/products/xumo-tv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>XUMO TV</h2>
            </a>
            <p>
              In Xumo TV we supported Hisense, Element, and Pioneer partners for this program with stable, and release testing for functional and non-functional testing.
            </p>
            <VideoSection videoSrc="/Videos/Videos1.mp4" />
          </div>
          <div className="stat">
            <a
              href="https://www.xumo.com/en-GB/products/xumo-stream-box"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>XUMO Stream Box</h2>
            </a>
            <p>
              The XUMO Stream Box allows users to stream content from various platforms directly to their TVs, combining both live TV and on-demand content into a single interface.
            </p>
            <VideoSection videoSrc="/Videos/Videos.mp4" />
          </div>
          <div className="stat">
            <h2>SKY Devices</h2>
            <p>
              Sky Smart TVs come equipped with internet connectivity and integrated applications, allowing users to access streaming services and browse the web.
            </p>
            <VideoSection videoSrc="/Videos/Videos2.mp4" />
          </div>
        </div>

        {/* Add space before "All you can stream" heading */}
        <div style={{ marginTop: '40px' }}></div> {/* Add some space here */}

        {/* "All you can stream" heading aligned left */}
        <div className="custom-heading1" style={{ textAlign: 'left' }}>All you can stream</div>

        {/* Streaming App Icons Section */}
        <div className="app-icons-bottom">
          <div className="app-description">
            RDK brings together 250+ apps in a simple, intuitive smart TV experience. Search across all apps at once, curate a watchlist with My List, and easily discover your next entertainment.
          </div>
          <div className="app-icons">
            <img src={NetFlixIcon} alt="Netflix" className="app-icon" />
            <img src={YouTubeIcon} alt="YouTube" className="app-icon" />
            <img src={DisneyIcon} alt="Disney" className="app-icon" />
            <img src={PrimeIcon} alt="Prime" className="app-icon" />
            <img src={AppleTVIcon} alt="AppleTv" className="app-icon" />
            <img src={MaxIcon} alt="Max" className="app-icon" />
            <img src={PeacockIcon} alt="Peacock" className="app-icon" />
            <img src={XumoPlayIcon} alt="XumoPlay" className="app-icon" />
            <img src={HuluIcon} alt="Hulu" className="app-icon" />
            <img src={SpotifyIcon} alt="Spotify" className="app-icon" />
          </div>
        </div>

        {/* Highlights Section */}
        <div className="highlights-section">
          <h2>2024 Key Highlights</h2>
          <ul className="highlights-list">
            <li>BHT and UAT Automation were completed on schedule, covering 13 cases for BHT and 26 cases for UAT.</li>
            <li>All entertainment squads contributed to UDT test case automation for the XiOne UK device platform, with 35 test cases automated.</li>
            <li>Collaborated with Clix/RM team to reduce number of the X1 EOL/EOD devices from rack. We had reduced the device numbers from 1000+ to 328 devices
            </li>
            <li>Stability, stress, and longevity testing were incorporated for XiOne UK and LLAMA UK devices.</li>
            <li>E2E testcase creation & execution for SKY DAI (Dynamic Insertion).</li>
            <li>RDKE Device bring-up has started for Pioneer and Element. </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
