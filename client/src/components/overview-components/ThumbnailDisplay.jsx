import React from 'react';

const ThumbnailDisplay = ({
  selectedStyle,
  productStyles,
  thumbnailIndexBounds,
  indexDisplacement,
  imageIndex,
  setImageIndex,
  scrollForward,
  scrollBackward,
}) => {
  return (
    <>
      {thumbnailIndexBounds && thumbnailIndexBounds[0] > 0 && (
        <img
          className='upArrow-icon'
          src='./assets/up-arrow-icon.png'
          onClick={(e) => {
            e.stopPropagation();
            scrollBackward();
          }}
        />
      )}
      <div className='thumbnail-container'>
        {selectedStyle &&
          selectedStyle.photos.slice(...thumbnailIndexBounds).map(({ thumbnail_url }, index) => {
            return (
              <img
                className={index + indexDisplacement === imageIndex ? 'thumbnail thumbnail-selected' : 'thumbnail'}
                src={thumbnail_url}
                key={index + indexDisplacement}
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
            scrollForward();
          }}
        />
      )}
    </>
  );
};

export default ThumbnailDisplay;
