import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import thunderImage from '../images/dark.jpeg';
import lightningImage from '../images/light.jpeg';
import stormImage from '../images/speed.jpeg';
import breezeImage from '../images/thunderstorm.jpeg';
import playIcon from '../images/play_icon.png';
import videoSrc from "../images/8625210-hd_1920_1080_30fps.mp4";  

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const horses = [thunderImage, lightningImage, stormImage, breezeImage];

  const navigate = useNavigate();

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  const handleImageClick = () => {
    setIsVideoPlaying(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const GettolandingPage = () => {
    navigate("/landing");
  };

  return (
    <div className="home-page">
      <nav>
        
        <div>
          {isLoggedIn ? (
            <button onClick={handleLoginLogout}>Logout</button>
          ) : (
            <button onClick={handleLoginLogout}>Login</button>
          )}
        </div>
      </nav>
      <div className="slider-container">
        <button type="button" className='btn-primary' onClick={GettolandingPage}>Get Rent</button>
        <Slider {...settings}>
          {horses.map((horse, index) => (
            <div key={index} onClick={handleImageClick}>
              <img src={horse} alt={`Horse ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="play-icon-container" onClick={toggleVideo}>
        <img src={playIcon} alt="Play" className="play-icon" />
      </div>
      {isVideoPlaying && (
        <div className="video-overlay" onClick={toggleVideo}>
          <video width="100%" height="100%" controls autoPlay>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default HomePage;
