declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module '*.mp4';
declare module '*.pdf';

interface ChildElementProp {
  children: JSX.Element | JSX.Element[] | React;
}
