import React from 'react';
import styled from 'styled-components';
import { color, device } from '../imports/variables';

const Overlay = styled.div`
  .top {
    height: 50vh;
    height: calc(var(--vh, 1vh) * 50);
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 8;
    .overlay-top {
      position: absolute;
      height: 100%;
      width: 33.333vw;
      background: ${color.light};
      bottom: 0;
      left: 0;
      right: 0;
      &:nth-child(2) {
        left: 33.333vw;
      }
      &:nth-child(3) {
        left: 66.666vw;
      }
    }
    @media ${device.tablet} {
      height: 50vh;
      .overlay-top {
        width: 50vw;
        &:nth-child(2) {
          left: 50vw;
        }
        &:nth-child(3) {
          display: none;
        }
      }
    }
    @media ${device.phone} {
      .overlay-top {
        width: 100vw;
        &:nth-child(2) {
          display: none;
        }
      }
    }
  }
  .bottom {
    bottom: 0;
    height: 50vh;
    height: calc(var(--vh, 1vh) * 50);
    position: absolute;
    width: 100%;
    z-index: 8;
    .overlay-bottom {
      position: absolute;
      height: 100%;
      width: 33.333vw;
      background: ${color.light};
      bottom: 0;
      right: 66.666vw;
      &:nth-child(2) {
        right: 33.333vw;
      }
      &:nth-child(3) {
        right: 0;
      }
    }
    @media ${device.tablet} {
      height: 50vh;
      .overlay-bottom {
        bottom: 50vh;
        right: 50vw;
        width: 50vw;
        &:nth-child(2) {
          right: 0;
        }
        &:nth-child(3) {
          display: none;
        }
      }
    }
    @media ${device.phone} {
      .overlay-bottom {
        bottom: 150vh;
        right: 0;
        width: 100vw;
        &:nth-child(2) {
          display: none;
        }
      }
    }
  }
`;

const IntroOverlay = () => {
  return (
    <Overlay id='intro-overlay'>
      <div className='top'>
        <div className='overlay-top' />
        <div className='overlay-top' />
        <div className='overlay-top' />
      </div>
      <div className='bottom'>
        <div className='overlay-bottom' />
        <div className='overlay-bottom' />
        <div className='overlay-bottom' />
      </div>
    </Overlay>
  );
};

export default IntroOverlay;
