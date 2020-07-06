import React from 'react';

const SlideshowBubbles = ({
  selectedStyle,
  imageIndex,
  indexDisplacement,
  setImageIndex,
  setIndexDisplacement,
  setThumbnailIndexBounds,
}) => {
  return (
    <div className='slideShow-bubble-container'>
      {!!Object.keys(selectedStyle).length &&
        selectedStyle.photos.map((_, index) => {
          return (
            <div
              className={index === imageIndex ? 'slideShow-bubble slideShow-bubble-selected' : 'slideShow-bubble'}
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setImageIndex(index);
                if (selectedStyle.photos.length > 7 && index >= 7) {
                  setIndexDisplacement(index - 6);
                  setThumbnailIndexBounds([index - 6, index + 1]);
                }
                if (selectedStyle.photos.length > 7 && index < 7) {
                  setIndexDisplacement(0);
                  setThumbnailIndexBounds([0, 7]);
                }
              }}></div>
          );
        })}
    </div>
  );
};

export default SlideshowBubbles;
