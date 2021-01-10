import React from 'react';
import styled from 'styled-components';
import { color, font, device } from '../imports/variables';

const NameBox = styled.div`
  align-items: center;
  background: ${color.med};
  display: flex;
  grid-area: one;
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

export default function HeroText() {
  return (
    <NameBox>
      <div className="container">
        <h1>Zach Cossman</h1>
      </div>
    </NameBox>
  );
}
