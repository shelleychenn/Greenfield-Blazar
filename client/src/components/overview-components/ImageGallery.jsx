import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleIsExpandedView } from '../../actions/';
import SlideshowBubbles from './SlideshowBubbles.jsx';
import ThumbnailDisplay from './ThumbnailDisplay.jsx';

const ImageGallery = () => {
  const productStyles = useSelector((state) => state.productStyles);
  const selectedStyle = useSelector((state) => state.selectedStyle);
  const isExpandedView = useSelector((state) => state.isExpandedView);
  const dispatch = useDispatch();

  const [currentImage, setCurrentImage] = useState();
  const [imageIndex, setImageIndex] = useState(0);
  const [indexDisplacement, setIndexDisplacement] = useState(0);
  const [thumbnailIndexBounds, setThumbnailIndexBounds] = useState();
  const [isZoomView, toggleIsZoomView] = useState(false);
  const [zoomedImageDims, setZoomedImageDims] = useState();
  const [mouseCoordinates, setMouseCoordinates] = useState();

  useEffect(() => {
    setCurrentImage(!!Object.keys(selectedStyle).length ? selectedStyle.photos[imageIndex] : null);
  }, [selectedStyle, imageIndex]);

  useEffect(() => {
    setThumbnailIndexBounds(
      !!Object.keys(selectedStyle).length ? [0, selectedStyle.photos.length > 7 ? 7 : selectedStyle.photos.length] : null,
    );
    setImageIndex(0);
  }, [selectedStyle]);

  const scrollForward = () => {
    setThumbnailIndexBounds([thumbnailIndexBounds[0] + 1, thumbnailIndexBounds[1] + 1]);
    setIndexDisplacement(indexDisplacement + 1);
  };

  const scrollBackward = () => {
    setThumbnailIndexBounds([thumbnailIndexBounds[0] - 1, thumbnailIndexBounds[1] - 1]);
    setIndexDisplacement(indexDisplacement - 1);
  };

  return (
    <div className={ isExpandedView ? 'imageGalleryComponent expanded-component' : 'imageGalleryComponent default-component'}>
      <div
        className={
          isExpandedView
            ? isZoomView
              ? 'container-imageGallery zoom-view'
              : 'container-imageGallery expanded-view'
            : 'container-imageGallery default-view'
        }
        onClick={() => {
          isExpandedView ? toggleIsZoomView(!isZoomView) : dispatch(toggleIsExpandedView());
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
                  dispatch(toggleIsExpandedView());
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
              {!!Object.keys(selectedStyle).length && imageIndex < selectedStyle.photos.length - 1 && (
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
