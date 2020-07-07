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
    return axios.get(`${API_URL}/reviews/${productId}/list`);
  },

}

export default apiHelpers;