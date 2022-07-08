import React from 'react';
import styled from 'styled-components';
import { color } from '../imports/variables';

import LightGallery from 'lightgallery/react';
import lgVideo from 'lightgallery/plugins/video';
import 'lightgallery/css/lightgallery.css';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  .lg-react-element {
    width: 100%;
    height: 100%;
  }
  &:hover {
    i {
      opacity: 1;
    }
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      color: ${color.light};
      cursor: pointer;
      opacity: 0.3;
      position: absolute;
      transition: opacity 0.2s ease-out;
    }
  }
  video {
    height: 100%;
    object-fit: cover;
    object-position: right;
    width: 100%;
  }
`;

interface Props {
  video: string;
  area: string;
}

export default function VideoBox({ video, area }: Props) {
  return (
    <Wrapper style={{ gridArea: area }}>
      <LightGallery plugins={[lgVideo]}>
        <a
          href='https://youtu.be/M7OKn9vBj9M'
          aria-label='video clip'
          data-src='https://youtu.be/M7OKn9vBj9M'
        >
          <i className='far fa-6x fa-play-circle' />
          <video src={video} autoPlay loop muted playsInline />
        </a>
      </LightGallery>
    </Wrapper>
  );
}
