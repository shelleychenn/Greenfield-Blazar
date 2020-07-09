import React from "react";
import compareFeatures from "../../helpers/compareFeatures"
var ComparisonModal = ({ productInfo, clickHandler}) => {
  let { features } = productInfo;
  var y= [{"feature":"Fabric","value":"100% Cotton"},{"feature":"Cut","value":"Skinny"}]
  var test = compareFeatures(features,y)


  let testKeys = Object.keys(test);



  return (
    <div className="modalWindowContainer" onClick={clickHandler}>
      <div className="comparisonModalWindow" >
        <div className="relatedProductName">{productInfo.name}</div>
        <div className="overViewProductName">{productInfo.name}</div>
        {testKeys.map((key, i) => {
          return (
            <div key={key} className={`feature${i}`}>
              {key}
            </div>
          );
        })}

        {testKeys.map((val, i) => {
          return test[val][0] ? (
            <div
              key={`checkFeatureOverView ${i}`}
              className={`overViewProductCheck${i}`}
            >
              <img src="./assets/checkmark-icon.png" />
            </div>
          ) : null;
        })}

        {testKeys.map((val, i) => {
          return test[val][1] ? (
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
