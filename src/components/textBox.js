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

export default function TextBox({ content, area, children }) {
  const { heading, subheading, date } = content;

  return (
    <Wrapper style={{ gridArea: area }}>
      <h5 className="date">{date}</h5>
      <h2 className="heading">{heading}</h2>
      <h3 className="subheading">{subheading}</h3>
      {children}
    </Wrapper>
  );
}
