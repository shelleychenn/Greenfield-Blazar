const productIdReducer = (state = 5, action) => {
  switch (action.type) {
    case 'SET_PRODUCT_ID':
      let num = Number(action.payload);
      if (!isNaN(num) && num !== 0) {
        return num;
      }
      default:
      return state;
  }
}

export default productIdReducer;