import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import products from '../../../../_testApiData/_productsApi.js';

const AddToCart = () => {

  const productStyles = useSelector((state) => state.productStyles);
  const selectedStyle = useSelector((state) => state.selectedStyle);

  //! Should probably pull from database
  const [isFavorite, toggleIsFavorite] = useState(false);

  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState();
  const [isOutOfStock, setIsOutOfStock] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    setIsOutOfStock(!!productStyles && productStyles.length ? false : true);
  }, [productStyles]);

  return (
    <div className='addToCartComponent'>
      <form className='container-AddToCart'>
        {showWarning && <p className='warning'>Please select size</p>}
        <select
          onChange={(e) => {
            setSize(e.target.value);
            if (selectedStyle.skus[e.target.value] < quantity) {
              setQuantity(1);
            } else {
              setQuantity(quantity ? quantity : 1);
            }
            showWarning ? setShowWarning(false) : null;
          }}
          disabled={isOutOfStock}>
          <option>{isOutOfStock ? 'OUT OF STOCK' : 'SELECT SIZE'}</option>
          {!!Object.keys(selectedStyle).length &&
            Object.entries(selectedStyle.skus).map(([rowSize, rowQty], index) => {
              if (rowQty) {
                return (
                  <option key={index} value={rowSize}>
                    {rowSize}
                  </option>
                );
              }
            })}
        </select>

        <select onChange={(e) => setQuantity(Number(e.target.value))} disabled={isOutOfStock || size === undefined}>
          <option>{size ? 1 : '-'}</option>
          {size &&
            [...Array(selectedStyle.skus[size] < 15 ? selectedStyle.skus[size] + 1 : 16).keys()]
              .slice(2)
              .map((qty, index) => {
                return (
                  <option key={index} value={qty}>
                    {qty}
                  </option>
                );
              })}
        </select>
        {!isOutOfStock && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (size === undefined || size === 'SELECT SIZE') {
                  setShowWarning(true);
                } else {
                  console.log('DATA TO BE SENT: ', { style_id: selectedStyle.style_id, size, quantity });
                }
              }}>
              ADD TO BAG
            </button>

            {/* TODO: If the default ‘Select Size’ is currently selected: Clicking this button should open the size dropdown, and a message should appear above the dropdown stating “Please select size”.  */}

            <div
              className='container-favorite'
              onClick={() => {
                toggleIsFavorite(!isFavorite);
                console.log('DATA TO BE SENT: ', { style_id: selectedStyle.style_id });
              }}>
              {isFavorite ? (
                <img src='./assets/heart-filled-icon.png' />
              ) : (
                <img src='./assets/heart-unfilled-icon.png' />
              )}
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default AddToCart;
