import React from 'react';

// Components
// import HeroText from '../components/heroText';
// import PhotoBox from '../components/photoBox';
// import TextBox from '../components/textBox';
// import VideoBox from '../components/videoBox';
// import DownloadBox from '../components/downloadBox';

// Assets
// import headshot from '../../static/assets/headshot.jpg';
// import video from '../../static/assets/ncl_thumbnail.mp4';

const Home: React.FC = () => {
  const gig = {
    heading: 'Footloose',
    subheading: 'Norwegian Cruise Lines',
    subnote: 'Mon, May 23th',
    info: 'Zach is currently playing Ren McCormack in Footloose on the Norwegian Joy.',
  };

  return (
    <>
      <h1>Hello cruel world!</h1>
      {/* <HeroText text='Zach Cossman' area='one' />
      <PhotoBox image={headshot} area='two' />
      <TextBox area='three' content={gig}>
        <p className='body'>
          <br />
          {gig.info}
          <br />
        </p>
      </TextBox>
      <VideoBox video={video} area='four' />
      <DownloadBox area='five' theme='dark' /> */}
    </>
  );
};

export default Home;
