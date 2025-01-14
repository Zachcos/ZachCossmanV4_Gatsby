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
    heading: 'More Info Soon',
    subheading: '',
    subnote: 'Mon, Jan 13th',
  };

  const blurb = [
    <>
      After completing a run of <span className='emphasis'>Waitress</span> as{' '}
      <span className='emphasis'>Dr. Pomatter</span> at Florida Studio Theatre,
      Zach is back in NYC.
      <br />
      <br />
      Additional information about upcoming projects coming soon.
    </>,
  ];

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
