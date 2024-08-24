import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import LightGallery from 'lightgallery/react';
import lgVideo from 'lightgallery/plugins/video';
import { color, device, font } from '../imports/variables';
import DownloadBox from '../components/downloadBox';
import GalleryBox from '../components/galleryBox';

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
    margin-bottom: 40px;
    width: 100%;
    span {
      font-size: ${font.subsubheading};
      color: ${color.med};
    }
  }
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 50px;
    width: 100%;
    a.thumb {
      overflow: hidden;
      &:hover {
        cursor: pointer;
      }
      .info {
        padding-top: 8px;
        h2 {
          text-transform: uppercase;
          font-weight: ${font.bold};
          font-size: ${font.subheading};
          margin-bottom: 5px;
        }
        h4 {
          color: ${color.med};
          font-weight: ${font.medium};
          font-size: ${font.subsubheading};
        }
      }
    }
  }
`;

interface Props {
  data: {
    images: {
      edges: {
        node: ImageProps[];
        filter: Function;
      };
    };
    videos: {
      edges: {
        node: VideoProps[];
        map: Function;
      };
    };
  };
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

interface VideoProps {
  node: {
    id: string;
    title: string;
    artist: string;
    findMe: string;
    videoUrl: string;
  };
}

const Media = ({ data }: Props) => {
  const allImages = data.images.edges;
  const allVideos = data.videos.edges;
  return (
    <>
      <Wrapper>
        <h2 className='gallery-header'>
          Videos <span>(additional videos coming soon)</span>{' '}
        </h2>
        {
          <LightGallery
            elementClassNames='gallery'
            plugins={[lgVideo]}
            autoplayVideoOnSlide
          >
            {allVideos.map((item: VideoProps) => {
              const current = item.node.findMe;
              return allImages
                .filter((item2: ImageProps) =>
                  item2.node.original.src.includes(current)
                )
                .map((item2: ImageProps) => (
                  <a
                    data-src={item.node.videoUrl}
                    key={item.node.id}
                    className='thumb'
                  >
                    <GatsbyImage
                      image={item2.node.gatsbyImageData}
                      alt={item.node.title}
                    />
                    <div className='info'>
                      <h2>{item.node.title}</h2>
                      <h4>{item.node.artist}</h4>
                    </div>
                  </a>
                ));
            })}
          </LightGallery>
        }
      </Wrapper>
      <GalleryBox area='four' images={allImages} />
      <DownloadBox area='five' theme='dark' />
    </>
  );
};

export const query = graphql`
  query {
    images: allImageSharp {
      edges {
        node {
          id
          original {
            src
          }
          gatsbyImageData(width: 200, height: 200, placeholder: BLURRED)
        }
      }
    }
    videos: allVideoDataJson {
      edges {
        node {
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

export default Media;
