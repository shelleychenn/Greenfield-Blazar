const isExpandedViewReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_IS_EXPANDED_VIEW':
      return !state;
    default:
      return state;
  }
}

export default isExpandedViewReducer;