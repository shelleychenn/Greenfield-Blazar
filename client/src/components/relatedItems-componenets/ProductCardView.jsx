import React from "react";

var ProductCardView = ({ productInfo, handleClick, view, value }) => {
  const {
    name,
    category,
    default_price,
    thumbnail_url,
    rating,
    slogan,
  } = productInfo;
  console.log(name)

  if (view === "relatedProducts") {
    return (
      <div className="productCardPadder">
        <div className="productCard">
          <div
            onClick={() => console.log("click")}
            style={{
              backgroundImage: `url(${thumbnail_url})`,
              backgroundSize: "cover",
            }}
          >
            <div className="starButton" id={value} onClick={handleClick}>
              star
            </div>
          </div>

          <div className="productInfo" onClick={() => console.log("click")}>
            <div className="category">{category} </div>
            <div className="productName"> {name}</div>
            <div className="productSlogan"> {slogan}</div>
            <div className="price">${default_price}</div>
          </div>

          {rating ? <div className="stars">{rating}</div> : null}
        </div>
      </div>
    );
  } else {
    return (
      <div className="productCardPadder">
        <div className="productCard">
          <div
            style={{
              backgroundImage: `url(${thumbnail_url})`,
              backgroundSize: "cover",
            }}
          >
            <div className="starButton" id={value} onClick={handleClick}>
              x
            </div>
          </div>

          <div className="productInfo">
            <div className="category">{name} </div>
            <div className="productName"> {category}</div>
            <div className="price">${default_price}</div>
          </div>
          {rating ? <div className="stars">{rating}</div> : null}
        </div>
      </div>
    );
  }
};

export default ProductCardView;
