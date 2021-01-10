import React from 'react';
import styled from 'styled-components';
import { color, font } from '../imports/variables';

const Wrapper = styled.div`
  background: ${color.light};
  box-sizing: border-box;
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

export default function CurrentBox({ area }) {
  return (
    <Wrapper style={{ gridArea: area }}>
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
    </Wrapper>
  );
}
