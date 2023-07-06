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
    heading: 'Sam Phillips in MDQ',
    subheading: 'Berkshire Theatre Group',
    subnote: 'Wed, Jun 14th',
  };

  const blurb =
    'Zach is currently playing Sam Phillips in Million Dollar Quartet at The Colonial Theatre in Pittsfield, MA, produced by Berkshire Theatre Group, running through July 16th.';

  return (
    <>
      <HeroText text='Zach Cossman' area='one' />
      <PhotoBox image={headshot} area='two' />
      <TextBox area='three' content={gig} theme=''>
        <p className='body'>
          <br />
          {blurb}
          <br />
          <br />
          <a
            href='https://www.berkshiretheatregroup.org/event/million-dollar-quartet/'
            target='_blank'
            rel='noreferrer'
          >
            Click Here
          </a>{' '}
          for more information
        </p>
      </TextBox>
      <VideoBox video={video} area='four' />
      <DownloadBox area='five' theme='dark' />
    </>
  );
};

export default Home;
