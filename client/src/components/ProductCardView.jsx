import React from "react";

var ProductCardView = ({ productInfo,handleClick,view,value}) => {
  const { name, category, default_price } = productInfo;
  
  
  if(view==="relatedProducts") {

  return (
    
    <div className="productCard" >
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
  }else{
    return (
    
      <div className="productCard" >
        <div className="imageDisplay">
          <div className="starButton" id ={value} onClick={handleClick}>x</div>
        </div>
  
        <div className="productInfo">
          <div className="category">{name, value} </div>
          <div className="productName"> {category}</div>
          <div className="price">${default_price}</div>
        </div>
  
        <div className="stars">stars go here</div>
      </div>
    );

  }

};

export default ProductCardView;

