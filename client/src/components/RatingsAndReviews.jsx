import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ReviewList from './RatingsAndReviewsComponents/ReviewList.jsx';
import ReviewBreakdown from './RatingsAndReviewsComponents/ReviewBreakdown.jsx';

const RatingsAndReviews = () => {
  const productReviews = useSelector((state) => state.productReviews);

  const [starCount, setStarCount] = useState(null);

  const handleStarFilter = (starCount) => {
    setStarCount(starCount);

    // let copy = this.props.reviews.slice();
    // let relatedReviews = this.props.reviews.filter((review) => {
    //   return review.rating === starCount;
    // });

    // if (!this.state.filterClicked) {
    //   this.setState({
    //     filterClicked: true,
    //   });
    //   this.props.dispatch(setProductReviews(relatedReviews));
    // } else {
    //   this.setState({
    //     filterClicked: false,
    //   });
    //   console.log(copy);
    //   this.props.dispatch(setProductReviews(copy));
    // }
  };

  //console.log('dataSelected', productReviews);
  if (
    productReviews &&
    productReviews.reviews &&
    productReviews.reviews.length &&
    productReviews.reviewsMetaData
  ) {
    console.log(starCount);
    let reviews = productReviews.reviews;
    if (starCount !== null) {
      reviews = reviews.filter((review) => {
        return review.rating === starCount;
      });
    }
    console.log(reviews);
    return (
      <div className="ratings-and-reviews-container">
        {/* Left side: ReviewBreakdown goes here */}
        <div className="ratings-and-reviews-left-container">
          <ReviewBreakdown
            reviews={productReviews.reviews}
            reviewsMetaData={productReviews.reviewsMetaData}
            handleStarFilter={handleStarFilter}
          />
        </div>
        {/* Right side: ReviewList goes here */}
        <div className="ratings-and-reviews-right-container">
          <ReviewList
            reviews={reviews}
            reviewsMetaData={productReviews.reviewsMetaData}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

// class RatingsAndReviews extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       reviews: this.props.reviews,
//     };
//     this.handleSortChoice = this.handleSortChoice.bind(this);
//     this.handleStarFilter = this.handleStarFilter.bind(this);
//   }

//   handleSortChoice(option) {
//     console.log(option);
//     let copy = [...this.state.reviews.results];
//     if (option === 'Relevant') {
//       this.state.reviews.results.sort((a, b) => {
//         // TODO:
//         return reviews;
//       });
//     }
//     if (option === 'Helpful') {
//       copy = copy.sort((a, b) => {
//         return b.helpfulness - a.helpfulness;
//       });
//       this.setState({
//         reviews: { ...this.state.reviews, results: copy },
//       });
//     }
//     if (option === 'Newest') {
//       copy = copy.sort((a, b) => {
//         return new Date(b.date) - new Date(a.date);
//       });
//       this.setState({
//         reviews: { ...this.state.reviews, results: copy },
//       });
//     }
//   }

//   handleStarFilter(starCount) {
//     let relatedReviews = this.props.reviews.results.filter((review) => {
//       return review.rating === starCount;
//     });
//     this.setState({
//       reviews: { results: relatedReviews },
//     });
//   }

//   render() {
//     console.log('reviews in RA', this.props.reviews);
//     return (
//       <div className="ratings-and-reviews-container">
//         {/* Left side: ReviewBreakdown goes here */}
//         <div className="ratings-and-reviews-left-container">
//           <ReviewBreakdown
//             reviewsMetaData={this.props.reviewsMetaData}
//             handleStarFilter={this.handleStarFilter}
//           />
//         </div>
//         {/* Right side: ReviewList goes here */}
//         <div className="ratings-and-reviews-right-container">
//           <ReviewList
//             reviews={this.state.reviews}
//             handleSortChoice={this.handleSortChoice}
//           />
//         </div>
//       </div>
//     );
//   }
// }

export default RatingsAndReviews;
