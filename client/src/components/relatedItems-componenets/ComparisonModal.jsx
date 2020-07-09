import React from 'react';


var ComparisonModal= ({productInfo})=>{
    let test={
        '100% Cotton': [ 1, 0 ],
        Skinny: [ 1, 0 ],
        Rubber: [ 0, 1 ],
        FullControlSkin: [ 0, 1 ],
        'ControlSupport Arch Bridge': [ 0, 1 ],
        'Double Stitch': [ 0, 1 ]
      }
      let testKeys=Object.keys(test)

let {features}=productInfo
console.log(JSON.stringify(features))
return(
<div className="modalWindowContainer"> 
<div className="comparisonModalWindow">
    <div className ="relatedProductName">{productInfo.name}</div>
    <div className ="overViewProductName">{productInfo.name}</div>
    {testKeys.map((key,i)=>{
        return <div className={`feature${i}`}>{key}</div>
    })}

    {testKeys.map((val,i)=>{
        
       return test[val][0]?  <div className ={`overViewProductCheck${i}`}>x</div>:null
        })}

      {testKeys.map((val,i)=>{
        
        return test[val][1]?  <div className ={`relatedProductCheck${i}`}>x</div>:null
         })}
         
  
</div>
</div>

)



}

export default ComparisonModal;