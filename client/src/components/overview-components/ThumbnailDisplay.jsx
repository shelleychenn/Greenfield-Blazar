import React from 'react';

const ThumbnailDisplay = ({
  selectedStyle,
  productDetails,
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
          alt='Up arrow icon'
        />
      )}
      <div className='thumbnail-container'>
        {!!Object.keys(selectedStyle).length && thumbnailIndexBounds &&
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
                alt={!!productDetails ? `${productDetails.name} ${imageIndex}` : ''}
              />
            );
          })}
      </div>
      {thumbnailIndexBounds && thumbnailIndexBounds[1] < selectedStyle.photos.length && (
        <img
          className='downArrow-icon'
          src='./assets/down-arrow-icon.png'
          onClick={(e) => {
            e.stopPropagation();
            scrollForward();
          }}
          alt='Down arrow icon'
        />
      )}
    </>
  );
};

export default ThumbnailDisplay;
