import React, { useEffect, useRef } from 'react';
import './VideoSection.css';

const VideoSection = ({ videoSrc }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.error("Video playback failed:", error);
        }
      };

      playVideo();
    }
  }, []);

  return (
    <div className="video-section">
      <video ref={videoRef} autoPlay muted loop playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;
