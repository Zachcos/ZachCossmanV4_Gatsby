import React from 'react';
import styled from 'styled-components';
import { color, font } from '../imports/variables';

import resume from '../../static/assets/ZachCossman.pdf';
import { Download } from './icons';

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 60px 25px 0;
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
    position: absolute;
    top: 43px;
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
  a {
    outline: none;
    text-decoration: none;
    &:hover {
      .download {
        color: ${color.med};
      }
      svg {
        fill: ${color.med};
      }
    }
  }
  .download {
    align-items: center;
    color: ${color.light};
    display: flex;
    line-height: 1.4rem;
    margin-bottom: 10px;
    transition: color 0.15s ease-out;
    svg {
      margin-right: 10px;
    }
    .emphasis {
      font-weight: ${font.medium};
    }
  }
`;

export default function DownloadBox({ area, theme }: DownloadBoxProps) {
  let style = {};

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
      <h2 className='heading'>Download</h2>
      <h3 className='subheading'>headshot/resume</h3>
      <a href={resume} target='_blank' rel='noreferrer'>
        <div className='download'>
          <Download />
          Zach Cossman Resume
        </div>
      </a>
    </Wrapper>
  );
}
