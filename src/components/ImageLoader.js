import React from 'react';
import Img from 'react-image';
import { Spinner } from 'reactstrap';

const ImageLoader = ({
  imgSrc,
  imgAlt,
  imgHeight = undefined,
  imgClass = undefined,
  loaderHeight,
  spinnerColor = null,
}) => {
  return (
    <Img
      src={imgSrc}
      alt={imgAlt}
      className={imgClass}
      height={imgHeight}
      loader={
        <div
          style={{ height: loaderHeight }}
          className='d-flex flex-column align-items-center justify-content-center'
        >
          <p>Loading Image...</p>
          <Spinner color={spinnerColor} />
        </div>
      }
      unloader={
        <div
          style={{ height: loaderHeight }}
          className='d-flex flex-column align-items-center justify-content-center border'
        >
          Sorry, Image not Found.
        </div>
      }
    />
  );
};

export default ImageLoader;
