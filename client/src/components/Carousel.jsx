import ProductCardView from "./ProductCardView.jsx";
import ComparisonModal from "./ComparisonModal.jsx"



import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProductCard: 0,
      modalView:false
    };
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleClick=this.handleClick.bind(this);

  }
/////////////////////////////////////////////////////////////////////////////////////////////
  handleClick(){
    this.setState({modalView:!this.state.modalView})
  }
  handleNext() {
    // this takes the current productCard and mutliplies it by the width of a single product card. Then takes that number and translate the div by that number
   
    if (
      this.state.currentProductCard <
      this.cardContainer.children.length - 1
    ) {
      if (
        this.state.currentProductCard + 8 ===
        this.cardContainer.children.length
      ) {
        this.nextButton.style.visibility = "hidden";
      }

      this.previousButton.style.visibility = "visible";

      let newCurrentCard = this.state.currentProductCard + 1;

      this.setState({ currentProductCard: newCurrentCard }, () => {
        this.cardContainer.style.transitionDuration = "1s";
        this.cardContainer.style.transform = `translate(-${
          22.5 * this.state.currentProductCard
        }vh)`;
      });
    }
  }
  ////////////////////////////////////////////////////////////////////////////

  handlePrevious() {
    if (this.state.currentProductCard > 0) {
      if (this.state.currentProductCard === 1) {
        this.previousButton.style.visibility = "hidden";
      }
      this.nextButton.style.visibility = "visible";
      let newCurrentCard = this.state.currentProductCard - 1;

      this.setState({ currentProductCard: newCurrentCard }, () => {
        this.cardContainer.style.transitionDuration = "1s";
        this.cardContainer.style.transform = `translate(-${
          22.5 * this.state.currentProductCard
        }vh)`;
      });
    }
  }
  //////////////////////////////////////////////////////////////////////////////
  render() {
    let size = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1,1,1,1,1,1];

    if(this.state.modalView){
      return(
        <div>
        <ComparisonModal/>
        <div className="viewer">
        
          <button
            ref={(ref_id) => (this.previousButton = ref_id)}
            onClick={this.handlePrevious}
            className={"pButton"}
          >
            Previous
          </button>
          <button
            ref={(ref_id) => (this.nextButton = ref_id)}
            onClick={this.handleNext}
            className={"nButton"}
          >
            Next
          </button>
        
          <div
            ref={(ref_id) => (this.cardContainer = ref_id)}
            className="cardContainer"
            
          >
            {size.map((item, i) => {
              return (
                <ProductCardView
                  key={i}
                  handleClick={this.handleClick}
                  productInfo={{
                    id: 6,
                    name: "Pumped Up Kicks",
                    slogan: "Faster than a just about anything",
                    description:
                      "The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.",
                    category: "Kicks",
                    default_price: "89",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      )
    }else{
    return (
      <div>
        
        <div className="viewer">
        
          <button
            ref={(ref_id) => (this.previousButton = ref_id)}
            onClick={this.handlePrevious}
            className={"pButton"}
          >
            Previous
          </button>
          <button
            ref={(ref_id) => (this.nextButton = ref_id)}
            onClick={this.handleNext}
            className={"nButton"}
          >
            Next
          </button>
        
          <div
            ref={(ref_id) => (this.cardContainer = ref_id)}
            className="cardContainer"
            
          >
            {size.map((item, i) => {
              return (
                <ProductCardView
                  key={i}
                  handleClick={this.handleClick}
                  productInfo={{
                    id: 6,
                    name: "Pumped Up Kicks",
                    slogan: "Faster than a just about anything",
                    description:
                      "The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.",
                    category: "Kicks",
                    default_price: "89",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
}





export default Carousel;
