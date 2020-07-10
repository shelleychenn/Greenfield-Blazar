import axios from 'axios';

const API_URL = 'http://18.224.200.47';

const apiHelpers = {
  getProductInformation: (productId) => {
    return axios.get(`${API_URL}/products/${productId}`);
  },

  getProductStyles: (productId) => {
    return axios.get(`${API_URL}/products/${productId}/styles`);
  },

  getRelatedProducts: (productId) => {
    return axios.get(`${API_URL}/products/${productId}/related`);
  },

  getProductReviews: (productId) => {
    return axios.get(`${API_URL}/reviews/${productId}/list?count=30`);
  },

  getProductReviewsMetadata: (productId) => {
    return axios.get(`${API_URL}/reviews/${productId}/meta`);
  },

  markReviewAsHelpful: (review_id) => {
    return axios.put(`${API_URL}/reviews/helpful/${review_id}`);
  },

  sortReviews: (productId, sortBy) => {
    return axios.get(
      `${API_URL}/reviews/${productId}/list?sort=${sortBy}&count=30`
    );
  },

  postReview: (productId, newReview) => {
    return axios.post(`${API_URL}/reviews/${productId}`, newReview);
  },
};

export default apiHelpers;
