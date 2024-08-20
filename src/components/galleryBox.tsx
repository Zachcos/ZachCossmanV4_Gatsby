import React from 'react';
import styled from 'styled-components';
import { color, font, device } from '../imports/variables';
import { GatsbyImage } from 'gatsby-plugin-image';
import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';

const Wrapper = styled.div`
  background: ${color.accent};
  box-sizing: border-box;
  color: ${color.dark};
  padding: 60px 25px 0;
  overflow: hidden;
  position: relative;
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    a.thumb {
      margin: 0 10px 20px 0%;
      max-height: 125px;
      max-width: 125px;
      overflow: hidden;
      &:hover {
        cursor: pointer;
      }
      @media ${device.tablet} {
        max-height: 100px;
        max-width: 100px;
      }
      @media ${device.phone} {
        max-height: 75px;
        max-width: 75px;
      }
    }
  }
  .heading {
    font-size: ${font.heading};
    font-weight: ${font.bold};
    margin-bottom: 20px;
    text-transform: uppercase;
  }
`;

interface Props {
  images: {
    node: ImageProps[];
    filter: Function;
  };
  area: string;
}

interface ImageProps {
  node: {
    id: string;
    original: {
      src: string;
    };
    gatsbyImageData: any;
  };
}

const GalleryBox = ({ area, images }: Props) => {
  return (
    <Wrapper style={{ gridArea: area }}>
      <h2 className='heading'>Headshots</h2>
      <LightGallery elementClassNames='gallery'>
        {images
          .filter((item: ImageProps) =>
            item.node.original.src.includes('headshot')
          )
          .map((img: ImageProps) => (
            <a
              data-src={img.node.original.src}
              key={img.node.id}
              className='thumb'
            >
              <GatsbyImage image={img.node.gatsbyImageData} alt='headshot' />
            </a>
          ))}
      </LightGallery>
    </Wrapper>
  );
};

export default GalleryBox;
