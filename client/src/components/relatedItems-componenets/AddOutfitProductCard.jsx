import React from "react";
import ProdcutCardView from "./ProductCardView.jsx";

var AddOutfitProductCard = (props) => (
  <div className="productCardPadder">
    <div className="addProductCard" onClick={props.handleAdd} >
      <h3 className="addProductCardTitle">ADD ITEM TO YOUR OUTFIT</h3>
    </div>
  </div>
);

export default AddOutfitProductCard;
