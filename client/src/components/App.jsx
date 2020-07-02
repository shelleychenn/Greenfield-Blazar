import React from "react";

import Carousel from "./Carousel.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const { name } = this.props;
    return (
      <div>
     
     <Carousel/>
     
     </div>
         
      
    );
  }
}

export default App;