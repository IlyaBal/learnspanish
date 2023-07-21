import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// eslint-disable-next-line react/prop-types
const Image = ({ alt, height, width, src, caption }) => (
  <div>
    <LazyLoadImage
      alt={alt}
      height={height}
      src={src} // use normal <img> attributes as props
      width={width}
    />
    <span>{caption}</span>
  </div>
);

export default Image;
