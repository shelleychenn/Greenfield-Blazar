const compareFeatures = (overviewObj, relatedObj) => {
  let resultObj = {};

  for (var item of relatedObj) {
    resultObj[item.value] = [1, 0];
  }

  for (var item of overviewObj) {
    if (resultObj[item.value]) {
      resultObj[item.value] = [1, 1];
    } else {
      resultObj[item.value] = [0, 1];
    }
  }
  return resultObj;
};

export default compareFeatures;
