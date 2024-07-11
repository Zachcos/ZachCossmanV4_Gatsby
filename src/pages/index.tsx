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
    heading: 'Million Dollar Quartet',
    subheading: 'North Shore Music Theatre',
    subnote: 'Thu, Jul 11th',
  };

  const blurb = [
    <>
      Zach will return to the role of{' '}
      <span className='emphasis'>Sam Phillips</span> in North Shore's upcoming
      production of <span className='emphasis'>Million Dollar Quartet</span>,
      &nbsp; running <span className='emphasis'>Sept 25th - Oct 6th</span> in
      Beverly, MA.
    </>,
    <br />,
    <br />,
    <>
      <a
        className='learnMore'
        target='_blank'
        href='https://www.nsmt.org/milliondollarquartet.html'
      >
        Click here
      </a>{' '}
      for info and tickets
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
