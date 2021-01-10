import React from 'react';
import styled from 'styled-components';
import { color, font } from '../imports/variables';

const Wrapper = styled.div`
  background: ${color.accent};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 45px 55px;
  span {
    font-size: ${font.heading};
    font-weight: ${font.bold};
    text-transform: uppercase;
  }
`;

export default function NavBox({ area }) {
  return (
    <Wrapper style={{ gridArea: area }}>
      <span>Resume</span>
      <span>Media</span>
      <span>Contact</span>
    </Wrapper>
  );
}
