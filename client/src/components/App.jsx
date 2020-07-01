import React from "react";
import ProductCardView from "./ProductCardView.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const { name } = this.props;
    return (
      
     
          <ProductCardView productInfo={{
            id: 6,
            name: 'Pumped Up Kicks',
            slogan: 'Faster than a just about anything',
            description:
              'The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.',
            category: 'Kicks',
            default_price: '89',
          }}/>
         
      
    );
  }
}

export default App;