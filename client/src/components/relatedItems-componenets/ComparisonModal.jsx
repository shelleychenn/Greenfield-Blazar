import React from "react";
import compareFeatures from "../../helpers/compareFeatures"
import {useSelector} from 'react-redux'
var ComparisonModal = ({ productInfo, clickHandler}) => {
  let { features } = productInfo;
  let OverviewData = useSelector((state)=>state.productInfo)
  var compareObj = compareFeatures(features,OverviewData.features)
 

  let combinedFeatures = Object.keys(compareObj);




  return (
    <div className="modalWindowContainer" onClick={clickHandler}>
      <div className="comparisonModalWindow" >
        <div className="relatedProductName">{OverviewData.name}</div>
        <div className="overViewProductName">{productInfo.name}</div>
        {combinedFeatures.map((key, i) => {
          return (
            <div key={key} className={`feature${i}`}>
              {key}
            </div>
          );
        })}

        {combinedFeatures.map((val, i) => {
          return compareObj[val][0] ? (
            <div
              key={`checkFeatureOverView ${i}`}
              className={`overViewProductCheck${i}`}
            >
              <img src="./assets/checkmark-icon.png" />
            </div>
          ) : null;
        })}

        {combinedFeatures.map((val, i) => {
          return compareObj[val][1] ? (
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
