import React from "react";
import ProdcutCardView from "./ProductCardView.jsx";

var AddOutfitProductCard = (props) => (
  <div className="productCardPadder">
    <div className="addProductCard" >
      <h3 className="addProductCardTitle">Add item to Your Outfit</h3>
      <div className="addProductIcon" onClick={props.handleAdd}>
        <img className="addProductIcon" src="/assets/plus.png"></img>
      </div>
    </div>
  </div>
);

export default AddOutfitProductCard;
