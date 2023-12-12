import React from 'react';

// Components
import HeroText from '../components/heroText';
import PhotoBox from '../components/photoBox';
import TextBox from '../components/textBox';
import VideoBox from '../components/videoBox';
import DownloadBox from '../components/downloadBox';

// Assets
import headshot from '../../static/assets/headshot3.jpg';
import video from '../../static/assets/ncl_thumbnail.mp4';

const Home = () => {
  const gig = {
    heading: 'Jersey Boys Las Vegas',
    subheading: '2024 Residency',
    subnote: 'Wed, Nov 15th',
  };

  const blurb =
    'Zach is currently in rehearsals to play Handsome Hank/Norm Waxman in the debut cast of the 2024 Jersey Boys residency at The Orleans Hotel & Casino in Las Vegas, Nevada.';

  return (
    <>
      <HeroText text='Zach Cossman' area='one' />
      <PhotoBox image={headshot} area='two' />
      <TextBox area='three' content={gig} theme=''>
        <p className='body'>
          <br />
          {blurb}
        </p>
      </TextBox>
      <VideoBox video={video} area='four' />
      <DownloadBox area='five' theme='dark' />
    </>
  );
};

export default Home;
