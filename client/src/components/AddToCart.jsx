import React, { useState, useEffect } from 'react';
import products from '../../../_testApiData/_productsApi.js';

const AddToCart = () => {
  //! will need to convert to either props or shared state
  const [productStyles, setProductStyles] = useState();
  const [selectedStyle, setSelectedStyle] = useState();
  //!

  //! Should probably pull from database
  const [isFavorite, toggleIsFavorite] = useState(false);

  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState();
  const [isOutOfStock, setIsOutOfStock] = useState(false);

  useEffect(() => {
    setProductStyles(products.productStyles.results);
    setSelectedStyle(!!productStyles && productStyles[0]);
    setIsOutOfStock(!!productStyles && productStyles.length ? false : true);
  }, [productStyles]);

  return (
    <form className='container-AddToCart'>
      <select onChange={(e) => {
        setSize(e.target.value);
        if (selectedStyle.skus[e.target.value] < quantity) {
          setQuantity(1);
        } else {
          setQuantity(quantity ? quantity : 1);
        }

      }} disabled = {isOutOfStock}>
        <option>{isOutOfStock ? 'OUT OF STOCK' : 'SELECT SIZE'}</option>
        {selectedStyle &&
          Object.entries(selectedStyle.skus).map(([rowSize, rowQty]) => {
            if (rowQty) {
              return <option value={rowSize}>{rowSize}</option>;
          }
          })}
      </select>

      <select onChange={(e) => setQuantity(Number(e.target.value))} disabled = {isOutOfStock} >
        <option>{ size ? 1 : '-' }</option>
        {size &&
          [...Array(selectedStyle.skus[size] < 15 ? selectedStyle.skus[size] + 1 : 16).keys()].slice(2).map((qty) => {
            return <option value={qty}>{qty}</option>;
          })}
      </select>
      {!isOutOfStock &&
      <>
      <button onClick = {(e) => {
        e.preventDefault();
        //! do something with the style selection
        console.log({ style_id: selectedStyle.style_id, id: 'TO BE ADDED', quantity });
      }} >ADD TO BAG</button>

      <div className = 'container-favorite' onClick = {() => {
        toggleIsFavorite(!isFavorite);
        //! Do something with data here
      }}>
        { isFavorite ? <img src='./assets/heart-filled-icon.png' /> : <img src='./assets/heart-unfilled-icon.png' /> }
      </div>
    </> }
    </form>
  );
};

export default AddToCart;
