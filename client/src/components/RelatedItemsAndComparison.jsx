import React,{useState,useEffect} from "react";
import {useSelector} from 'react-redux'
import Carousel from "./relatedItems-componenets/Carousel.jsx";
import dataFormatter from "../helpers/dataFormatter.js";
import { setProductId } from "../actions/index.js";


// class RelatedProducts extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       relatedProductList: [],
//       outFitList: JSON.parse(localStorage.getItem("outFitArray")),
//       currentProductId:0
//     };
//     this.changeOutfitList = this.changeOutfitList.bind(this);
//   }

//   changeOutfitList(value) {
//     this.setState({ outFitList: value });
//   }
//   componentDidMount() {
//     this.setState({currentProductId:this.props.productId},()=>{

//       dataFormatter(this.state.currentProductId).then((updatedProductList) =>
//       this.setState({ relatedProductList: updatedProductList })
//     );

//     })
    
 
//   }
//   componentDidUpdate(previousProps=5){
//     if(previousProps !== this.props.productId){
//        console.log("mike was right");
//     }
//   }
//   render() {
//     return (
//       <div className="relatedItems-grid-master">
//         <div className="relatedProducts-container">
//           <h4 className="relatedItemsTitle">Related Products</h4>
//           <Carousel
//             view="relatedProducts"
//             list={this.state.relatedProductList}
//           />
//         </div>
//         <div className="yourOutfit-container">
//           <h4 className="relatedItemsTitle">Your Outfit </h4>

//           <Carousel
//             view="yourOutfit"
//             list={this.state.outFitList}
//             alterList={this.changeOutfitList}
//           />
//         </div>
//       </div>
//     );
//   }
// }





const RelatedProducts = () => {
  const [relatedProductList,setRelatedProductList] = useState([])
  const [outfitList,setOutfitList] = useState(JSON.parse(localStorage.getItem("outFitArray")))
  let productId = useSelector((state) => state.productId)
  
 
  useEffect(
    () =>{
      
  
     dataFormatter(productId)
     .then((data)=> setRelatedProductList(data) )
    
    },[productId]

  )
 

  return (
    <div className="relatedItems-grid-master">
    <div className="relatedProducts-container">
      <h4 className="relatedItemsTitle">Related Products</h4>
      <Carousel
        view="relatedProducts"
        list={relatedProductList}
        />
    </div>
    <div className="yourOutfit-container">
      <h4 className="relatedItemsTitle">Your Outfit </h4>

      <Carousel
        view="yourOutfit"
        list={outfitList}
        alterList={setOutfitList}
        />
    </div>
  </div>

);

};


export default RelatedProducts;