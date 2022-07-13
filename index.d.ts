declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module '*.mp4';
declare module '*.pdf';

interface ChildElementProp {
  children: JSX.Element | JSX.Element[] | React;
}

interface SetIsOpenProps {
  setIsOpen: Function;
}

interface DownloadBoxProps {
  area: string;
  theme: string;
}

interface HeroTextProps {
  area: string;
  text: string;
}

interface PhotoBoxProps {
  image: string;
  area: string;
}

interface TextBoxProps {
  content: ContentTypes;
  area: string;
  theme: string;
  children: JSX.Element;
}

interface TextBoxContentProps {
  heading: string;
  subheading: string;
  subnote: string;
}

interface VideoBoxProps {
  video: string;
  area: string;
}

interface MediaProps {
  data: {
    images: {
      edges: {
        node: {
          id: string;
          original: {
            src: string;
          };
          gatsbyImageData: Object;
        };
        filter: Function;
      };
    };
    videos: {
      edges: {
        node: {
          id: string;
          title: string;
          artist: string;
          findMe: string;
          videoUrl: string;
        };
        map: Function;
      };
    };
  };
}

interface ImageItemData {
  node: {
    id: string;
    original: {
      src: string;
    };
    gatsbyImageData: any;
  };
}

interface VideoItemData {
  node: {
    id: string;
    title: string;
    artist: string;
    findMe: string;
    videoUrl: string;
  };
}
