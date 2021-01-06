import React from 'react';
import styled from 'styled-components';
import { color, font } from '../imports/variables';

import headshot from '../../static/assets/headshot.jpg';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'name name about'
    'current feature nav';
  min-height: 100vh;
  min-width: 100%;

  overflow: hidden;
`;

const NameBox = styled.div`
  align-items: center;
  background: ${color.med};
  display: flex;
  grid-area: name;
  justify-content: center;
  h1 {
    font-size: ${font.display};
    font-weight: ${font.bold};
    text-transform: uppercase;
  }
`;

const AboutBox = styled.div`
  background: url(${headshot}) no-repeat;
  background-position-y: calc(-2vw - 10px);
  background-size: cover;
  grid-area: about;
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
  return (
    <GridWrapper>
      <NameBox>
        <h1>Zach Cossman</h1>
      </NameBox>
      <AboutBox />
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
      <FeatureBox />
      <NavBox>
        <span>Resume</span>
        <span>Media</span>
        <span>Contact</span>
      </NavBox>
    </GridWrapper>
  );
}
