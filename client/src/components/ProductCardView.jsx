import React from "react";

var ProductCardView = ({ productInfo,handleClick}) => {
  const { name, category, default_price } = productInfo;
  


  return (
    <div className="productCard">
      <div className="imageDisplay">
        <div className="starButton" onClick={handleClick}>star</div>
      </div>

      <div className="productInfo">
        <div className="category">{name} </div>
        <div className="productName"> {category}</div>
        <div className="price">${default_price}</div>
      </div>

      <div className="stars">stars go here</div>
    </div>
  );
};

export default ProductCardView;

