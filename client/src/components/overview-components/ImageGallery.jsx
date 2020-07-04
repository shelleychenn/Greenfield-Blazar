import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import products from '../../../../_testApiData/_productsApi.js';
import SlideshowBubbles from './SlideshowBubbles.jsx';
import ThumbnailDisplay from './ThumbnailDisplay.jsx';

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
  const [zoomedImageDims, setZoomedImageDims] = useState();
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

  const scrollForward = () => {
    setThumbnailIndexBounds([thumbnailIndexBounds[0] + 1, thumbnailIndexBounds[1] + 1]);
    setIndexDisplacement(indexDisplacement + 1);
  };

  const scrollBackward = () => {
    setThumbnailIndexBounds([thumbnailIndexBounds[0] - 1, thumbnailIndexBounds[1] - 1]);
    setIndexDisplacement(indexDisplacement - 1);
  };

  return (
    <div className='imageGalleryComponent'>
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
          if (isZoomView) {
            setMouseCoordinates({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
            setZoomedImageDims([
              Number(
                window.getComputedStyle(ReactDOM.findDOMNode(e.target)).getPropertyValue('width').split('px').join(''),
              ),
              Number(
                window.getComputedStyle(ReactDOM.findDOMNode(e.target)).getPropertyValue('height').split('px').join(''),
              ),
            ]);
          }
        }}>
        <img
          src={currentImage ? currentImage.url : ''}
          className={isZoomView ? 'main-image-zoomed' : 'main-image'}
          //! has issues with certain images
          style={
            isZoomView && mouseCoordinates
              ? {
                  objectPosition: `${(mouseCoordinates.x * 100) / zoomedImageDims[0]}% ${
                    (mouseCoordinates.y * 100) / zoomedImageDims[1]
                  }%`,
                }
              : null
          }
        />
        <div className='image-overlay-container'>
          {!isZoomView && (
            <>
              {isExpandedView ? (
                <SlideshowBubbles
                  selectedStyle={selectedStyle}
                  imageIndex={imageIndex}
                  indexDisplacement={indexDisplacement}
                  setImageIndex={setImageIndex}
                  setIndexDisplacement={setIndexDisplacement}
                  setThumbnailIndexBounds={setThumbnailIndexBounds}
                />
              ) : (
                <ThumbnailDisplay
                  selectedStyle={selectedStyle}
                  productStyles={productStyles}
                  thumbnailIndexBounds={thumbnailIndexBounds}
                  indexDisplacement={indexDisplacement}
                  imageIndex={imageIndex}
                  setImageIndex={setImageIndex}
                  scrollForward={scrollForward}
                  scrollBackward={scrollBackward}
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
                  className={isExpandedView ? 'leftArrow-icon leftArrow-icon-expanded' : 'leftArrow-icon'}
                  src='./assets/left-arrow-icon.png'
                  onClick={(e) => {
                    e.stopPropagation();
                    if (imageIndex > 0) {
                      setImageIndex(imageIndex - 1);
                      if (imageIndex - 1 < thumbnailIndexBounds[0]) {
                        scrollBackward();
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
                        scrollForward();
                      }
                    }
                  }}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
