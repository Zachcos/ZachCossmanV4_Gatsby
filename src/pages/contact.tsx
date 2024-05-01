import React from 'react';
import { color } from '../imports/variables';
import HeroText from '../components/heroText';
import TextBox from '../components/textBox';
import DownloadBox from '../components/downloadBox';
import PhotoBox from '../components/photoBox';

import headshot from '../../static/assets/headshot4.jpg';
import ASALogo from '../../static/assets/ASAlogo.png';

const Contact = () => {
  const agentDetails = {
    heading: "I'm represented",
    subheading: 'by Ann Steele Agency',
    subnote: '',
  };
  const designDetails = {
    heading: 'Photography',
    subheading: 'portfolio',
    subnote: '',
  };

  return (
    <>
      <HeroText text='get in touch' area='one' />
      <TextBox area='two' content={agentDetails} theme='light'>
        <a
          href='https://annsteeleagency.com'
          target='_blank'
          rel='noreferrer'
          style={{ color: `${color.dark}` }}
        >
          <div className='img-container'>
            <img src={ASALogo} alt='' />
            <span className='asa emphasis'>Visit ASA.com</span>
          </div>
        </a>
      </TextBox>
      <DownloadBox area='three' theme='dark' />
      <TextBox area='four' content={designDetails} theme='accent'>
        <a
          href='https://zachcos.myportfolio.com'
          target='_blank'
          rel='noreferrer'
          style={{ color: `${color.dark}` }}
        >
          <div className='img-container'>
            <span className='asa emphasis'>Zachcos.myportfolio.com</span>
          </div>
        </a>
      </TextBox>
      <PhotoBox image={headshot} area='five' />
    </>
  );
};

export default Contact;
