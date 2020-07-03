import React, { useState, useEffect } from 'react';
import products from '../../../_testApiData/_productsApi.js';

const ImageGallery = () => {
  //! will need to convert to either props or shared state
  const [productStyles, setProductStyles] = useState();
  const [selectedStyle, setSelectedStyle] = useState();
  //!

  const [currentImage, setCurrentImage] = useState();
  const [imageIndex, setImageIndex] = useState(0);
  const [indexDisplacement, setIndexDisplacement] = useState(0);
  const [thumbnailIndexBounds, setThumbnailIndexBounds] = useState();
  const [isExpandedView, toggleIsExpandedView] = useState(false);
  const [isZoomView, toggleIsZoomView] = useState(false);
  const [mouseCoordinates, setMouseCoordinates] = useState();

  useEffect(() => {
    setProductStyles(products.productStyles.results);
    setSelectedStyle(!!productStyles && productStyles[0]);
    setCurrentImage(!!productStyles ? productStyles[0].photos[imageIndex] : null);
  }, [productStyles, imageIndex]);

  useEffect(() => {
    setThumbnailIndexBounds(
      !!productStyles ? [0, productStyles[0].photos.length > 7 ? 7 : productStyles[0].photos.length] : null,
    );
  }, [productStyles]);

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
        //! has issues if image has different dimensions than 800x500
        style={
          isZoomView && mouseCoordinates
            ? { objectPosition: `${(mouseCoordinates.x * 100) / 800}% ${(mouseCoordinates.y * 100) / 500}%` }
            : null
        }
      />
      <div className='image-overlay-container'>
        {!isZoomView && (
          <>
            {thumbnailIndexBounds && thumbnailIndexBounds[0] > 0 && (
              <img
                className='upArrow-icon'
                src='./assets/up-arrow-icon.png'
                onClick={(e) => {
                  e.stopPropagation();
                  setThumbnailIndexBounds([thumbnailIndexBounds[0] - 1, thumbnailIndexBounds[1] - 1]);
                  setIndexDisplacement(indexDisplacement - 1);
                }}
              />
            )}
            <div className='thumbnail-container'>
              {selectedStyle &&
                selectedStyle.photos.slice(...thumbnailIndexBounds).map(({ thumbnail_url }, index) => {
                  return (
                    <img
                      className={
                        index + indexDisplacement === imageIndex ? 'thumbnail thumbnail-selected' : 'thumbnail'
                      }
                      src={thumbnail_url}
                      onClick={(e) => {
                        e.stopPropagation();
                        setImageIndex(index + indexDisplacement);
                      }}
                    />
                  );
                })}
            </div>
            {thumbnailIndexBounds && thumbnailIndexBounds[1] < productStyles[0].photos.length && (
              <img
                className='downArrow-icon'
                src='./assets/down-arrow-icon.png'
                onClick={(e) => {
                  e.stopPropagation();
                  setThumbnailIndexBounds([thumbnailIndexBounds[0] + 1, thumbnailIndexBounds[1] + 1]);
                  setIndexDisplacement(indexDisplacement + 1);
                }}
              />
            )}
            <img
              className='fullScreen-icon'
              src='./assets/fullscreen-icon.png'
              onClick={(e) => {
                e.stopPropagation();
                toggleIsExpandedView(!isExpandedView);
              }}
            />
            {imageIndex > 0 && (
              <img
                className='leftArrow-icon'
                src='./assets/left-arrow-icon.png'
                onClick={(e) => {
                  e.stopPropagation();
                  if (imageIndex > 0) {
                    setImageIndex(imageIndex - 1);
                    if (imageIndex - 1 < thumbnailIndexBounds[0]) {
                      setThumbnailIndexBounds([thumbnailIndexBounds[0] - 1, thumbnailIndexBounds[1] - 1]);
                      setIndexDisplacement(indexDisplacement - 1);
                    }
                  }
                }}
              />
            )}
            {productStyles && imageIndex < productStyles[0].photos.length - 1 && (
              <img
                className='rightArrow-icon'
                src='./assets/right-arrow-icon.png'
                onClick={(e) => {
                  e.stopPropagation();
                  if (imageIndex < selectedStyle.photos.length - 1) {
                    setImageIndex(imageIndex + 1);
                    if (imageIndex >= thumbnailIndexBounds[1] - 1) {
                      setThumbnailIndexBounds([thumbnailIndexBounds[0] + 1, thumbnailIndexBounds[1] + 1]);
                      setIndexDisplacement(indexDisplacement + 1);
                    }
                  }
                }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
