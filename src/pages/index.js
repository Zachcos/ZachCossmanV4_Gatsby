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
    heading: 'Ren McCormack',
    subheading: 'Footloose w/ NCL',
    subnote: 'Wed, Jan 6th',
  };

  return (
    <>
      <HeroText text="Zach Cossman" area="one" />
      <PhotoBox image={headshot} area="two" />
      <TextBox area="three" content={gig}>
        <p className="body">
          Zach is currently in rehearsals to play Ren McCormack aboard the
          Norwegian Joy.
          <br />
          <br />
          Stay tuned for more information about the show
        </p>
      </TextBox>
      <VideoBox video={video} area="four" />
      <DownloadBox area="five" theme="dark" />
    </>
  );
}
