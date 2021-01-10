import React from 'react';
import styled from 'styled-components';
import { color } from '../imports/variables';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  &:hover {
    i {
      opacity: 1;
    }
  }
  i {
    color: ${color.light};
    cursor: pointer;
    opacity: 0.3;
    position: absolute;
    transition: opacity 0.2s ease-out;
  }
  video {
    height: 100%;
    left: 0;
    object-fit: cover;
    object-position: right;
    top: 0;
    width: 100%;
  }
`;

export default function VideoBox({ video, area }) {
  return (
    <Wrapper style={{ gridArea: area }}>
      <i className="far fa-6x fa-play-circle" />
      <video src={video} autoPlay loop muted playsInline />
    </Wrapper>
  );
}
