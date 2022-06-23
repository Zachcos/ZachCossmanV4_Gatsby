import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { color, device, font } from '../imports/variables';
import DownloadBox from '../components/downloadBox';
import VideoBox from '../components/videoBox';

import video from '../../static/assets/ncl_thumbnail.mp4';

import LightGallery from 'lightgallery/react';
import lgVideo from 'lightgallery/plugins/video';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lightgallery.css';

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
      overflow: hidden;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export default function Media({ data }) {
  const allImages = data.images.edges;
  const allVideos = data.videos.edges;
  return (
    <>
      <Wrapper>
        <h2 className="gallery-header">Headshots</h2>
        <LightGallery elementClassNames='gallery gallery--photo'>
            {allImages
            .filter(item => item.node.original.src.includes('headshot'))
            .map(img => (
              <a data-src={img.node.original.src} key={img.node.id} className="thumb">
                <GatsbyImage image={img.node.gatsbyImageData} alt='headshot'/>
              </a>
            ))}
            </LightGallery>
        <h2 className="gallery-header">Covers</h2>
        <LightGallery elementClassNames='gallery gallery--video' plugins={[lgVideo]} autoplayVideoOnSlide>
          {allVideos
          .map((item) => {
            const current = item.node.findMe;
            return allImages
            .filter((item2) => item2.node.original.src.includes(current))
            .map((item2) => (
              <a
              data-src={item.node.videoUrl}
              key={item.node.id}
              alt={item.node.title}
              className="thumb"
              >
                  <GatsbyImage image={item2.node.gatsbyImageData} alt={item.node.title} />
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
    images: allImageSharp {
      edges {
        node {
          id
          original {
            src
          }
          gatsbyImageData(
            width: 200
            height: 200
            placeholder: BLURRED
          )
        }
      }
    }
    videos: allVideoDataJson {
      edges {
        node
        {
          id
          title
          artist
          findMe
          videoUrl
        }
      }
    }
  }
`;