import React from 'react';
import styled from 'styled-components';
import { device } from '../imports/variables';

const Wrapper = styled.div`
  grid-area: about;
  height: 40vw;
  height: calc(var(--vh, 1vh) * 50);
  overflow: hidden;
  position: relative;
  width: 33.333vw;
  &:hover {
    .hover-overlay {
      opacity: 0.8;
    }
  }
  img {
    object-fit: cover;
    object-position: top;
    width: 100%;
  }
  @media ${device.tablet} {
    width: 50vw;
  }
  @media ${device.phone} {
    width: 100vw;
  }
`;

export default function AboutBox({ image, overlayText }) {
  return (
    <Wrapper>
      <div className="hover-overlay">
        <h2>{overlayText}</h2>
      </div>
      <img src={image} alt="" />
    </Wrapper>
  );
}
