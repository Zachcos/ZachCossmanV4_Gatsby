import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import $ from 'jquery';
import { color, device, font } from '../imports/variables';
import 'lightgallery';
import 'lg-video';
import '../css/lightgallery.css';
import DownloadBox from '../components/downloadBox';
import TextBox from '../components/textBox';

const Wrapper = styled.div`
  align-items: center;
  background: ${color.light};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  grid-area: 1 / 1 / 3 / 3;
  justify-content: center;
  padding: 25px 50px;
  position: relative;
  z-index: 15;
  @media ${device.phone} {
    grid-area: 1 / 1 / 4 / 3;
  }
  h2.gallery-header {
    font-size: ${font.heading};
    font-weight: ${font.bold};
    width: 100%;
  }
  .photo-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    a.thumb {
      margin: 25px 10px;
      max-height: 150px;
      max-width: 150px;
      width: 100%;
      @media ${device.phone} {
        max-height: 100px;
        max-width: 100px;
      }
    }
  }
`;

export default function Media({ data }) {
  function onLightGallery(node) {
    $(node).lightGallery();
  }

  const details = {
    heading: 'Placeholder',
    subheading: 'something goes here',
    subnote: '',
  };

  return (
    <>
      <Wrapper>
        <h2 className="gallery-header">Headshots</h2>
        <div className="photo-gallery" ref={onLightGallery}>
          {data.images.nodes
            .filter((item) => item.original.src.includes('headshot'))
            .map((img) => (
              <a href={img.original.src} key={img.id} className="thumb">
                <Img fluid={img.fluid} alt="" />
              </a>
            ))}
        </div>
      </Wrapper>
      <TextBox area="four" theme="medium" content={details} />
      <DownloadBox area="five" theme="dark" />
    </>
  );
}

export const query = graphql`
  query {
    images: allImageSharp(sort: { fields: fixed___originalName, order: ASC }) {
      nodes {
        id
        fluid(maxWidth: 250, maxHeight: 250, quality: 70) {
          ...GatsbyImageSharpFluid
        }
        original {
          src
        }
      }
    }
  }
`;
