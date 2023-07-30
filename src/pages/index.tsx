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

const Home = () => {
  const gig = {
    heading: 'Back in NYC',
    subheading: 'More info coming soon',
    subnote: 'Mon, Jul 17th',
  };

  const blurb =
    'Zach is back in NYC after completing a run playing Sam Phillips in Million Dollar Quartet at The Colonial Theatre in Pittsfield, MA, produced by Berkshire Theatre Group.';

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
