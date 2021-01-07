import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { color, font } from '../imports/variables';

// Components
import IntroOverlay from '../components/introOverlay';
import HeroText from '../components/heroText';
import AboutBox from '../components/aboutBox';
import CurrentBox from '../components/currentBox';

// Assets
import headshot from '../../static/assets/headshot.jpg';
import video from '../../static/assets/video.mp4';

const FeatureBox = styled.div`
  align-items: center;
  display: flex;
  grid-area: feature;
  justify-content: center;
  position: relative;
  &:hover {
    i {
      opacity: 1;
    }
  }
  i {
    color: ${color.light};
    cursor: pointer;
    opacity: 0.3;
    position: absolute;
    transition: opacity 0.2s ease-out;
  }
  video {
    height: 100%;
    left: 0;
    object-fit: cover;
    object-position: right;
    top: 0;
    width: 100%;
  }
`;

const NavBox = styled.div`
  background: ${color.accent};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-area: nav;
  padding: 45px 55px;
  span {
    font-size: ${font.heading};
    font-weight: ${font.bold};
    text-transform: uppercase;
  }
`;

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline();

    // prevent flashing
    gsap.to('body', { duration: 0, css: { visibility: 'visible' } });

    tl.from('.container h1', {
      duration: 1.8,
      delay: 1,
      ease: 'power4.out',
      y: 120,
      skewY: 7,
    })
      .to('.overlay-top', {
        duration: 1.6,
        stagger: 0.4,
        ease: 'expo.inOut',
        height: 0,
      })
      .to('.overlay-bottom', {
        width: 0,
        duration: 1.6,
        delay: -0.8,
        stagger: 0.4,
        ease: 'expo.inOut',
      })
      .to('#intro-overlay', {
        duration: 0,
        css: { display: 'none' },
      });
  }, []);

  return (
    <>
      <IntroOverlay />
      <HeroText />
      <AboutBox image={headshot} overlayText="About me." />
      <CurrentBox />
      <FeatureBox>
        <i className="far fa-6x fa-play-circle" />
        <video src={video} autoPlay loop muted playsInline />
      </FeatureBox>
      <NavBox>
        <span>Resume</span>
        <span>Media</span>
        <span>Contact</span>
      </NavBox>
    </>
  );
}
