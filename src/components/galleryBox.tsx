import React from 'react';
import styled from 'styled-components';

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  .lg-react-element {
    width: 100%;
    height: 100%;
  }
  &:hover {
    svg {
      opacity: 1;
    }
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      cursor: pointer;
      opacity: 0.3;
      position: absolute;
      transition: opacity 0.15s ease-out;
    }
  }
  video {
    height: 100%;
    object-fit: cover;
    object-position: right;
    width: 100%;
  }
`;

interface Props {
  area: string;
}

const GalleryBox = ({ area }: Props) => {
  return (
    <Wrapper style={{ gridArea: area }}>
      <LightGallery>this is a test</LightGallery>
    </Wrapper>
  );
};

export default GalleryBox;
