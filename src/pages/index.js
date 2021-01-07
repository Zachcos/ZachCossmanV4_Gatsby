import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { color, font, device } from '../imports/variables';
import IntroOverlay from '../components/IntroOverlay';

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
  @media ${device.phone} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 50vh);
    grid-template-areas:
      'name'
      'about'
      'current'
      'feature'
      'nav';
  }
  .hover-overlay {
    align-items: center;
    background: ${color.dark};
    bottom: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 0.2s ease-out;
    width: 100%;
    height: 100%;
    h2 {
      color: ${color.light};
      font-size: ${font.heading};
      font-weight: ${font.bold};
      text-transform: uppercase;
    }
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
      @media ${device.phone} {
        font-size: 3rem;
      }
      @media ${device.SMphone} {
        font-size: 2.4rem;
      }
    }
  }
`;

const AboutBox = styled.div`
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
  align-items: center;
  display: flex;
  grid-area: feature;
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
      <IntroOverlay />
      <GridWrapper>
        <NameBox>
          <div className="container">
            <h1>Zach Cossman</h1>
          </div>
        </NameBox>
        <AboutBox>
          <div className="hover-overlay">
            <h2>About me.</h2>
          </div>
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
          <i className="far fa-6x fa-play-circle" />
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
