import React, { useState, useEffect } from 'react';
import products from '../../../_testApiData/_productsApi.js';

const ImageGallery = () => {
  //! will need to convert to either props or shared state
  const [productStyles, setProductStyles] = useState();
  const [selectedStyle, setSelectedStyle] = useState();
  //!

  const [currentImage, setCurrentImage] = useState();
  const [imageIndex, setImageIndex] = useState(0);
  const [isExpandedView, toggleIsExpandedView] = useState(false);
  const [isZoomView, toggleIsZoomView] = useState(false);
  const [mouseCoordinates, setMouseCoordinates] = useState();

  useEffect(() => {
    setProductStyles(products.productStyles.results);
    setSelectedStyle(!!productStyles && productStyles[0]);
    setCurrentImage(!!productStyles ? productStyles[0].photos[imageIndex] : null);
  }, [productStyles, imageIndex]);

  return (
    <div
      className={
        isExpandedView
          ? isZoomView
            ? 'container-imageGallery zoom-view'
            : 'container-imageGallery expanded-view'
          : 'container-imageGallery default-view'
      }
      onClick={() => {
        isExpandedView ? toggleIsZoomView(!isZoomView) : toggleIsExpandedView(!isExpandedView);
      }}
      onMouseMove={(e) => {
        isZoomView && setMouseCoordinates({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
      }}>
      <img
        src={currentImage ? currentImage.url : ''}
        className={isZoomView ? 'main-image-zoomed' : 'main-image'}
        // 800 and 500 below come from the image size
        //! has issues if image was different dimensions than 800x500
        style={
          isZoomView && mouseCoordinates
            ? { objectPosition: `${(mouseCoordinates.x * 100) / 800}% ${(mouseCoordinates.y * 100) / 500}%` }
            : null
        }
      />
      <div className='image-overlay-container'>
        {!isZoomView && (
          <>
            <div className='thumbnail-container'>
              {/*//! 7 images at a time */}
              {selectedStyle &&
                selectedStyle.photos.map(({ thumbnail_url }, index) => {
                  return (
                    <img
                      className={index === imageIndex ? 'thumbnail thumbnail-selected' : 'thumbnail'}
                      src={thumbnail_url}
                      onClick={(e) => {
                        e.stopPropagation();
                        setImageIndex(index);
                      }}
                    />
                  );
                })}
              {/* down arrow icon */}
            </div>
            <img
              className='fullScreen-icon'
              src='./assets/fullscreen-icon.png'
              onClick={(e) => {
                e.stopPropagation();
                toggleIsExpandedView(!isExpandedView);
              }}
            />
            <img
              className='leftArrow-icon'
              src='./assets/left-arrow-icon.png'
              onClick={(e) => {
                e.stopPropagation();
                imageIndex > 0 ? setImageIndex(imageIndex - 1) : null;
              }}
            />
            <img
              className='rightArrow-icon'
              src='./assets/right-arrow-icon.png'
              onClick={(e) => {
                e.stopPropagation();
                imageIndex < selectedStyle.photos.length - 1 ? setImageIndex(imageIndex + 1) : null;
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
