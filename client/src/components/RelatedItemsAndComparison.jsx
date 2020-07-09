import React from "react";
import Carousel from "./relatedItems-componenets/Carousel.jsx";
import dataFormatter from "../helpers/dataFormatter.js";


class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductList: [],
      outFitList: JSON.parse(localStorage.getItem("outFitArray")),
      currentProductId:0
    };
    this.changeOutfitList = this.changeOutfitList.bind(this);
  }

  changeOutfitList(value) {
    this.setState({ outFitList: value });
  }
  componentDidMount() {
    this.setState({currentProductId:this.props.productId},()=>{

      dataFormatter(this.state.currentProductId).then((updatedProductList) =>
      this.setState({ relatedProductList: updatedProductList })
    );

    })
    
 
  }
  render() {
    return (
      <div className="relatedItems-grid-master">
        <div className="relatedProducts-container">
          <h4 className="relatedItemsTitle">Related Products</h4>
          <Carousel
            view="relatedProducts"
            list={this.state.relatedProductList}
          />
        </div>
        <div className="yourOutfit-container">
          <h4 className="relatedItemsTitle">Your Outfit </h4>

          <Carousel
            view="yourOutfit"
            list={this.state.outFitList}
            alterList={this.changeOutfitList}
          />
        </div>
      </div>
    );
  }
}

export default RelatedProducts;
