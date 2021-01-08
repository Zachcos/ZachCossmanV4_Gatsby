import React from 'react';

// Components
import HeroText from '../components/heroText';
import AboutBox from '../components/aboutBox';
import CurrentBox from '../components/currentBox';
import FeatureBox from '../components/featureBox';
import NavBox from '../components/navBox';

// Assets
import headshot from '../../static/assets/headshot.jpg';
import video from '../../static/assets/video.mp4';

export default function Home() {
  return (
    <>
      <HeroText />
      <AboutBox image={headshot} />
      <CurrentBox />
      <FeatureBox video={video} />
      <NavBox />
    </>
  );
}
