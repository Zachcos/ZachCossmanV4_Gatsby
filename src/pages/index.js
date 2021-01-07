import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { color, font, device } from '../imports/variables';

import headshot from '../../static/assets/headshot.jpg';
import video from '../../static/assets/video.mp4';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'name name about'
    'current feature nav';
  min-height: 100vh;
  height: 100%;
  min-width: 100%;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50vh 50vh 50vh;
    grid-template-areas:
      'name name'
      'current about'
      'feature nav';
  }
`;

const NameBox = styled.div`
  align-items: center;
  background: ${color.med};
  display: flex;
  grid-area: name;
  justify-content: center;
  .container {
    overflow: hidden;
    position: relative;
    z-index: 10;
    h1 {
      font-size: ${font.display};
      font-weight: ${font.bold};
      text-transform: uppercase;
    }
  }
  @media ${device.phone} {
    background: lightcoral;
  }
`;

const AboutBox = styled.div`
  grid-area: about;
  height: 50vw;
  height: calc(var(--vh, 1vh) * 50);
  width: 33.333vw;
  img {
    height: 100%;
    object-fit: cover;
    object-position: top;
    width: 100%;
  }
  @media ${device.tablet} {
    width: 50vw;
    img {
      margin-top: 0;
    }
  }
`;

const CurrentBox = styled.div`
  background: ${color.light};
  box-sizing: border-box;
  grid-area: current;
  padding: 45px 25px 0;
  position: relative;
  .date,
  .heading,
  .subheading {
    text-transform: uppercase;
  }
  .heading,
  .subheading {
    font-weight: ${font.bold};
  }
  .date {
    font-size: ${font.subsubheading};
    font-weight: ${font.medium};
    margin-bottom: 15px;
    opacity: 0.25;
  }
  .heading {
    font-size: ${font.heading};
    margin-bottom: 5px;
  }
  .subheading {
    font-size: ${font.subheading};
    margin-bottom: 40px;
    opacity: 0.8;
  }
  .body {
    line-height: 1.4rem;
  }
`;

const FeatureBox = styled.div`
  background: darkmagenta;
  grid-area: feature;
  position: relative;
  video {
    height: 100%;
    left: 0;
    object-fit: cover;
    top: 0;
    width: 100%;
  }
`;

const NavBox = styled.div`
  background: ${color.accent};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-area: nav;
  padding: 45px 55px;
  span {
    font-size: ${font.heading};
    font-weight: ${font.bold};
    text-transform: uppercase;
  }
`;

const IntroOverlay = styled.div`
  .top {
    height: 50vh;
    height: calc(var(--vh, 1vh) * 50);
    position: absolute;
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
      .overlay-bottom {
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
  }
`;

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline();

    // prevent flashing
    gsap.to('body', { duration: 0, css: { visibility: 'visible' } });

    tl.from('.container h1', {
      duration: 1.8,
      delay: 1,
      ease: 'power4.out',
      y: 120,
      skewY: 7,
    })
      .to('.overlay-top', {
        duration: 1.6,
        stagger: 0.4,
        ease: 'expo.inOut',
        height: 0,
      })
      .to('.overlay-bottom', {
        width: 0,
        duration: 1.6,
        delay: -0.8,
        stagger: 0.4,
        ease: 'expo.inOut',
      })
      .to('#intro-overlay', {
        duration: 0,
        css: { display: 'none' },
      });
  }, []);

  return (
    <>
      <IntroOverlay id="intro-overlay">
        <div className="top">
          <div className="overlay-top" />
          <div className="overlay-top" />
          <div className="overlay-top" />
        </div>
        <div className="bottom">
          <div className="overlay-bottom" />
          <div className="overlay-bottom" />
          <div className="overlay-bottom" />
        </div>
      </IntroOverlay>
      <GridWrapper>
        <NameBox>
          <div className="container">
            <h1>Zach Cossman</h1>
          </div>
        </NameBox>
        <AboutBox>
          <img src={headshot} alt="" />
        </AboutBox>
        <CurrentBox>
          <h5 className="date">Wed, Jan 6th</h5>
          <h2 className="heading">Ren McCormack</h2>
          <h3 className="subheading">Footloose w/ NCL</h3>
          <p className="body">
            Zach is currently in rehearsals to play Ren McCormack aboard the
            Norwegian Joy.
            <br />
            <br />
            Stay tuned for more information about the show
          </p>
        </CurrentBox>
        <FeatureBox>
          <video src={video} autoPlay loop muted playsInline />
        </FeatureBox>
        <NavBox>
          <span>Resume</span>
          <span>Media</span>
          <span>Contact</span>
        </NavBox>
      </GridWrapper>
    </>
  );
}
