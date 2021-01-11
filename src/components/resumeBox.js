import React from 'react';

import styled from 'styled-components';
import { color, font } from '../imports/variables';

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 45px 25px 0;
  position: relative;
  .subnote,
  .heading,
  .subheading {
    text-transform: uppercase;
  }
  .heading,
  .subheading {
    font-weight: ${font.bold};
  }
  .subnote {
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
    margin-bottom: 10px;
    .emphasis {
      font-weight: ${font.medium};
    }
  }
`;

export default function TextBox({ area, theme }) {
  let style = '';

  switch (theme) {
    case 'dark':
      style = {
        background: `${color.dark}`,
        color: `${color.light}`,
      };
      break;
    case 'medium':
      style = {
        background: `${color.med}`,
        color: `${color.dark}`,
      };
      break;
    case 'accent':
      style = {
        background: `${color.accent}`,
        color: `${color.dark}`,
      };
      break;
    default:
      style = {
        background: `${color.light}`,
        color: `${color.dark}`,
      };
      break;
  }

  return (
    <Wrapper style={{ gridArea: area, ...style }}>
      <h5 className="subnote">something here</h5>
      <h2 className="heading">Download</h2>
      <h3 className="subheading">headshot/resume</h3>
      <p>this will be the download link</p>
    </Wrapper>
  );
}
