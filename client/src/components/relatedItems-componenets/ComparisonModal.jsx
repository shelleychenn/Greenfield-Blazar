import React from "react";
import compareFeatures from "../../helpers/compareFeatures"
import {useSelector} from 'react-redux'
var ComparisonModal = ({ productInfo, clickHandler}) => {
  let { features } = productInfo;
  let OverviewData = useSelector((state)=>state.productInfo)
  var combinedFeatures = compareFeatures(features,OverviewData.features)
 

  let featureName = Object.keys(combinedFeatures);




  return (
    <div className="modalWindowContainer" onClick={clickHandler}>
      <div className="comparisonModalWindow" >
        <div className="relatedProductName">{OverviewData.name}</div>
        <div className="overViewProductName">{productInfo.name}</div>
        {featureName.map((key, i) => {
          return (
            <div key={key} className={`feature${i}`}>
              {key}
            </div>
          );
        })}

        {featureName.map((val, i) => {
          return combinedFeatures[val][0] ? (
            <div
              key={`checkFeatureOverView ${i}`}
              className={`overViewProductCheck${i}`}
            >
              <img src="./assets/checkmark-icon.png" />
            </div>
          ) : null;
        })}

        {featureName.map((val, i) => {
          return combinedFeatures[val][1] ? (
            <div
              key={`checkFeatureRelated ${i}`}
              className={`relatedProductCheck${i}`}
            >
              <img src="./assets/checkmark-icon.png" />
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default ComparisonModal;
