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
    heading: 'Dr. Pomatter in Waitress',
    subheading: 'Florida Studio Theatre',
    subnote: 'Thurs, Jan 2nd',
  };

  const blurb = [
    <>
      Zach is currently playing Dr. Pomatter in Waitress at Florida Studio
      Theatre.
      <br />
      <br />
      <a
        target='_blank'
        href='https://www.floridastudiotheatre.org/events-and-tickets/winter-mainstage-series-2024-25/waitress'
      >
        Click here
      </a>{' '}
      to learn more about the show.
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
