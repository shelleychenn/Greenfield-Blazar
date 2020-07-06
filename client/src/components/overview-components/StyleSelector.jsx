import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedStyle } from '../../actions/';

const StyleSelector = () => {
  const productStyles = useSelector((state) => state.productStyles);
  const selectedStyle = useSelector((state) => state.selectedStyle);
  const dispatch = useDispatch();

  return (
    <div className='styleSelector-component'>
      <div className='container-styleSelector'>
        <p>
          <span>STYLE > </span>
          {!!Object.keys(selectedStyle).length && selectedStyle.name.toUpperCase()}
        </p>
        <div className='container-thumbnails'>
          {!!productStyles &&
            productStyles.map((style) => {
              return (
                <div>
                  {selectedStyle.style_id === style.style_id ? (
                    <img className='checkmark' src='./assets/checkmark-icon.png' />
                  ) : null}
                  <img
                    className='thumbnail'
                    src={style.photos[0].thumbnail_url}
                    onClick={() => dispatch(setSelectedStyle(style))}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default StyleSelector;
