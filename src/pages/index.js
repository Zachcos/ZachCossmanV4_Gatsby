import React from 'react';

// Components
import HeroText from '../components/heroText';
import PhotoBox from '../components/photoBox';
import CurrentBox from '../components/currentBox';
import VideoBox from '../components/videoBox';
import NavBox from '../components/navBox';

// Assets
import headshot from '../../static/assets/headshot.jpg';
import video from '../../static/assets/video.mp4';

export default function Home() {
  return (
    <>
      <HeroText area="one " />
      <PhotoBox image={headshot} area="two" />
      <CurrentBox area="three" />
      <VideoBox video={video} area="four" />
      <NavBox area="five" />
    </>
  );
}
