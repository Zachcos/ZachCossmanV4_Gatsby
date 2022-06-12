import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { color, device, font } from '../imports/variables';
import DownloadBox from '../components/downloadBox';
import VideoBox from '../components/videoBox';

import video from '../../static/assets/ncl_thumbnail.mp4';

import LightGallery from 'lightgallery/react';
import lgVideo from 'lightgallery/plugins/video';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lightGallery.css';

const Wrapper = styled.div`
  align-items: center;
  background: ${color.light};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  grid-area: 1 / 1 / 3 / 3;
  justify-content: center;
  padding: 25px 20px;
  position: relative;
  z-index: 15;
  @media ${device.phone} {
    grid-area: 1 / 1 / 4 / 3;
  }
  h2.gallery-header {
    font-size: ${font.heading};
    font-weight: ${font.bold};
    margin-bottom: 20px;
    width: 100%;
  }
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 50px;
    width: 100%;
    a.thumb {
      margin: 10px 5px;
      max-height: 125px;
      max-width: 125px;
      width: 100%;
    }
  }
`;

export default function Media({ data }) {
  return (
    <>
      <Wrapper>
        <h2 className="gallery-header">Headshots</h2>
        <LightGallery elementClassNames='gallery gallery--photo'>
          {data.images.nodes
            .filter((item) => item.original.src.includes('headshot'))
            .map((img) => (
              <a href={img.original.src} key={img.id} className="thumb">
                <Img fluid={img.fluid} alt="" />
              </a>
            ))}
            </LightGallery>
        <h2 className="gallery-header">Covers</h2>
        <LightGallery elementClassNames='gallery gallery--video' plugins={[lgVideo]} autoplayVideoOnSlide>
          {data.videos.nodes.map((item) => {
            const current = item.findMe;
            return data.images.nodes
            .filter((item2) => item2.fluid.src.includes(current))
            .map((item2) => (
              <a
              data-src={item.videoUrl}
              key={item.id}
              alt={item.title}
              className="thumb"
              >
                  <Img fluid={item2.fluid} alt={item2.title} />
                </a>
              ));
            })}
          </LightGallery>
        </Wrapper>
      <VideoBox video={video} area="four" />
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

    videos: allVideoDataJson {
      nodes {
        id
        title
        artist
        videoUrl
        findMe
      }
    }
  }
`;
