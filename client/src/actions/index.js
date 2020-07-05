export const setProductStyles = (styles) => {
  return {
    type: 'SET_PRODUCT_STYLES',
    payload: styles
  }
}

export const setSelectedStyle = (style) => {
  return {
    type: 'SET_SELECTED_STYLE',
    payload: style
  }
}

export const setProductInfo = (info) => {
  return {
    type: 'SET_PRODUCT_INFO',
    payload: info
  }
}

export const setProductReviews = (reviews) => {
  return {
    type: 'SET_PRODUCT_REVIEWS',
    payload: reviews
  }
}