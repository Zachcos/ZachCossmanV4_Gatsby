import React, { useEffect } from 'react';
import gsap from 'gsap';

// Components
import IntroOverlay from '../components/introOverlay';
import HeroText from '../components/heroText';
import AboutBox from '../components/aboutBox';
import CurrentBox from '../components/currentBox';
import FeatureBox from '../components/featureBox';
import NavBox from '../components/navBox';

// Assets
import headshot from '../../static/assets/headshot.jpg';
import video from '../../static/assets/video.mp4';

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
      <FeatureBox video={video} />
      <NavBox />
    </>
  );
}
