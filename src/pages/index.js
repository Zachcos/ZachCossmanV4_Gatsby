import React from 'react';

// Components
import HeroText from '../components/heroText';
import PhotoBox from '../components/photoBox';
import TextBox from '../components/textBox';
import VideoBox from '../components/videoBox';
import DownloadBox from '../components/downloadBox';

// Assets
import headshot from '../../static/assets/headshot.jpg';
import video from '../../static/assets/ncl_thumbnail.mp4';

export default function Home() {
  const gig = {
    heading: 'Kinky Boots',
    subheading: 'Norwegian Cruise Lines',
    subnote: 'Mon, July 26th',
  };

  return (
    <>
      <HeroText text="Zach Cossman" area="one" />
      <PhotoBox image={headshot} area="two" />
      <TextBox area="three" content={gig}>
        <p className="body">
          <br />
          Zach is currently playing Charlie Price in Kinky Boots on the
          Norwegian Encore.
          <br />
          <br />
          <a
            className="learnMore"
            href="https://google.com"
            target="_BLANK"
            rel="noreferrer"
          >
            Learn More
          </a>
        </p>
      </TextBox>
      <VideoBox video={video} area="four" />
      <DownloadBox area="five" theme="dark" />
    </>
  );
}
