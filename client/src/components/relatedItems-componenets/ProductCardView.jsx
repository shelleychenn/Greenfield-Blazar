import React from "react";
import StarRating from "../StarRating.jsx";
import {useDispatch} from 'react-redux'
import { setProductId } from '../../actions/';

var ProductCardView = ({ productInfo, handleClick, view, value }) => {
  const {
    name,
    category,
    default_price,
    thumbnail_url,
    rating,
    slogan,
    id
  } = productInfo;

  const dispatch=useDispatch()
  return (
    <div className="productCardPadder">
      <div className="productCard">
        <div
          onClick={() => dispatch(setProductId(id)) }
          aria-label={slogan}
          style={{
            backgroundImage: `url(${thumbnail_url})`,
            backgroundSize: "cover",
          }}
        >
          <div className="starButton" id={value} onClick={handleClick}>
            {view === "relatedProducts" ? "star" : "x"}
          </div>
        </div>

        <div className="productInfo" onClick={() => console.log("click")}>
          <div className="category">{category.toUpperCase()} </div>
          <div className="productName"> {name}</div>
          <div className="productSlogan"> {slogan.split('').length > 25 ? slogan.slice(0,25).concat('...') : slogan}</div>
          <div className="price">${default_price}</div>
        </div>

        {rating ? (
          <div className="stars">
            <StarRating value={rating} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductCardView;
