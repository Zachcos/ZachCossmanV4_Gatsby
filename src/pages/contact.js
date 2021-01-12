import React from 'react';
import { color } from '../imports/variables';
import HeroText from '../components/heroText';
import TextBox from '../components/textBox';
import DownloadBox from '../components/downloadBox';
import PhotoBox from '../components/photoBox';

import headshot from '../../static/assets/headshot3.jpg';
import ASALogo from '../../static/assets/ASAlogo.png';
import ZCDLogo from '../../static/assets/ZCDlogo.svg';

export default function Contact() {
  const agentDetails = {
    heading: "I'm represented",
    subheading: 'by Ann Steele Agency',
    subnote: '',
  };
  const designDetails = {
    heading: 'I made this site',
    subheading: 'You can have one, too',
    subnote: '',
  };

  return (
    <>
      <HeroText text="get in touch" area="one" />
      <TextBox area="two" content={agentDetails} theme="light">
        <a
          href="mailto: zachcos@gmail.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: `${color.dark}` }}
        >
          <div className="img-container">
            <img src={ASALogo} alt="" />
            <span className="asa emphasis">Contact ASA</span>
          </div>
        </a>
      </TextBox>
      <DownloadBox area="three" theme="dark" />
      <TextBox area="four" content={designDetails} theme="accent">
        <a
          href="mailto: zachcos@gmail.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: `${color.dark}` }}
        >
          <div className="img-container">
            <img src={ZCDLogo} alt="" />
            <span className="zcd emphasis">Zach Cossman Designs</span>
          </div>
        </a>
      </TextBox>
      <PhotoBox image={headshot} area="five" />
    </>
  );
}
