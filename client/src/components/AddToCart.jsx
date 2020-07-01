import React, { useState, useEffect } from 'react';
import products from '../../../_testApiData/_productsApi.js';

const AddToCart = () => {
  //! will need to convert to either props or shared state
  const [productStyles, setProductStyles] = useState();
  const [selectedStyle, setSelectedStyle] = useState();
  //!

  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState('-');

  useEffect(() => {
    setProductStyles(products.productStyles.results);
    setSelectedStyle(!!productStyles && productStyles[0]);
  }, [productStyles]);

  return (
    <form className='container-AddToCart'>
      <select onChange={(e) => setSize(e.target.value)}>
        <option>SELECT SIZE</option>
        {/* need to add logic to deactivate if out of stock */}
        {selectedStyle &&
          Object.entries(selectedStyle.skus).map(([rowSize, rowQty]) => {
            if (rowQty) {
              return <option value={rowSize}>{rowSize}</option>;
          }
          })}
      </select>

      <select onChange={(e) => setQuantity(e.target.value)}>
        <option>{quantity}</option>
        {size &&
          [...Array(selectedStyle.skus[size] < 15 ? selectedStyle.skus[size] + 1 : 16).keys()].slice(1).map((qty) => {
            return <option value={qty}>{qty}</option>;
          })}
      </select>

      <button>ADD TO BAG</button>

      <div className = 'container-favorite'>
        <img src='./assets/heart-unfilled-icon.png' />
      </div>
    </form>
  );
};

export default AddToCart;
