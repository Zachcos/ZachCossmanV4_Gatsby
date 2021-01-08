import React from 'react';
import styled from 'styled-components';
import { device } from '../imports/variables';

const Wrapper = styled.div`
  grid-area: about;
  overflow: hidden;
  position: relative;
  width: 33.333vw;
  img {
    object-fit: cover;
    object-position: top;
    width: 100%;
  }
  @media screen and (min-width: 1000px) {
    height: 50vw;
    height: calc(var(--vh, 1vh) * 50);
  }
  @media ${device.tablet} {
    width: 50vw;
  }
  @media ${device.phone} {
    width: 100vw;
  }
`;

export default function AboutBox({ image }) {
  return (
    <Wrapper>
      <img src={image} alt="" />
    </Wrapper>
  );
}
