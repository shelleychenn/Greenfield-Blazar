import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Carousel from "./relatedItems-componenets/Carousel.jsx";
import dataFormatter from "../helpers/dataFormatter.js";


const RelatedProducts = () => {
  const [relatedProductList, setRelatedProductList] = useState([]);
  const [outfitList, setOutfitList] = useState(
    JSON.parse(localStorage.getItem("outFitArray"))
  );
  let productId = useSelector((state) => state.productId);
  let currentProductData = useSelector((state) => state.productInfo);
  let { photos } = useSelector((state) => state.selectedStyle);
  let img = photos ? photos[0].thumbnail_url : [""];
  let overviewOutfitData = { thumbnail_url: img, ...currentProductData };

  useEffect(() => {
    dataFormatter(productId)
      .then((data) => setRelatedProductList(data))

      .catch((err) => console.log("problem formatting "));
  }, [productId]);

  return (
    <div className="relatedItems-grid-master">
      <div className="relatedProducts-container">
        <h4 className="relatedItemsTitle">Related Products</h4>
        <Carousel view="relatedProducts" list={relatedProductList} />
      </div>
      <div className="yourOutfit-container">
        <h4 className="relatedItemsTitle">Your Outfit </h4>

        <Carousel
          view="yourOutfit"
          list={outfitList}
          alterList={setOutfitList}
          currentProductData={overviewOutfitData}
        />
      </div>
    </div>
  );
};

export default RelatedProducts;
