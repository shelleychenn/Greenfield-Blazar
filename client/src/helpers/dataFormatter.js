import apiHelpers from "./apiHelpers";

const dataFormatter = (id) => {
  let resultData = [];

  return apiHelpers
    .getRelatedProducts(id)
    .then(({ data }) => data)
    .then((relatedProductsIdArray) => {
      return Promise.all(
        relatedProductsIdArray.map((item) => {
          return apiHelpers.getProductInformation(item);
        })
      );
    })
    .then((data) => {
      for (var item of data) {
        resultData.push(item.data);
      }
      return resultData;
    })
    .then((resultData) => {
      return Promise.all(
        resultData.map((item) => {
          return apiHelpers
            .getProductStyles(item.id)
            .then(({ data }) => {
              item.thumbnail_url = data.results[0].photos[0].thumbnail_url;
            })
            .then(() => item)

            .catch((err) => console.log(err));
        })
      );
    })
    .then((resultDataWithImgAdded) => {
      return Promise.all(
        resultDataWithImgAdded.map((item) => {
          return apiHelpers.getProductReviewsMetadata(item.id)
            .then(({ data }) => {
              let rating = ratingAvgFinder(data.ratings);
              item.rating = rating;
              return item;
            });
        })
      );
    })
    .catch((err) => console.log(err));
};
///////////////////////////////////////////////////////////////////////////


const ratingAvgFinder = (ratingObj) => {
  let voteCount = 0;
  let voteTotals = 0;
  if (!Object.keys(ratingObj).length) {
    return 0;
  }

  for (var rating in ratingObj) {
    voteTotals += rating * ratingObj[rating];
    voteCount += ratingObj[rating];
  }
  return (voteTotals / voteCount).toFixed(2);
};

export default dataFormatter;
