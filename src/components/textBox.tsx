import React from 'react';

import styled from 'styled-components';
import { color, font } from '../imports/variables';

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
    opacity: 0.3;
    position: absolute;
    top: 40px;
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
  }
  .emphasis {
    font-weight: ${font.medium};
  }
  a {
    outline: none;
    text-decoration: none;
    &.learnMore {
      color: ${color.med};
      font-weight: ${font.medium};
      transition: color 0.15s ease-out;
      &:hover {
        color: ${color.dark};
      }
    }
    &:hover {
      .img-container {
        .zcd {
          color: #ffcc00;
        }
        .asa {
          color: #c47d7b;
        }
      }
    }
    .img-container {
      align-items: center;
      display: flex;
      img {
        height: 150px;
        margin-right: 20px;
        width: 150px;
      }
      .zcd,
      .asa {
        transition: color 0.15s ease-out;
      }
    }
  }
`;

interface Props {
  content: string;
  area: string;
  children: JSX.Element;
  theme: string;
}

export default function TextBox({ content, area, children, theme }: Props) {
  const { heading, subheading, subnote } = content;
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
      <h5 className='subnote'>{subnote}</h5>
      <h2 className='heading'>{heading}</h2>
      <h3 className='subheading'>{subheading}</h3>
      {children}
    </Wrapper>
  );
}
