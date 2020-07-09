import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ProductOverview = () => {
  const productDetails = useSelector((state) => state.productInfo);
  const selectedStyle = useSelector((state) => state.selectedStyle);

   //! ROUTE - TO CHANGE
  const route = 'https://temp.com/temp';
  const [socialMediaContent, setSocialMediaContent] = useState({});

  useEffect(() => {
    !!Object.keys(productDetails).length &&
      !!Object.keys(selectedStyle).length &&
      setSocialMediaContent({
        route: encodeURI(route),
        content: encodeURI(`${productDetails.name} - ${productDetails.slogan}`),
        image: encodeURI(selectedStyle.photos[0].thumbnail_url),
      });
  }, [productDetails, selectedStyle]);


  return (
    <div className='productOverview-component'>
      <div className='productOverview-container'>
        <div className='productDescription-container'>
          <div className='description'>
            {!!Object.keys(productDetails).length && (productDetails.slogan || productDetails.description) && (
              <>
                <h4>{productDetails.slogan}</h4>
                <p>{productDetails.description}</p>
              </>
            )}
            <div className='socialMedia-container'>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${socialMediaContent.route}%2F&amp;src=sdkpreparse`}
                target='_blank'>
                <img src='./assets/facebook-icon.png' />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${socialMediaContent.content}%20->%20${socialMediaContent.route}`}
                target='_blank'>
                <img src='./assets/twitter-icon.png' />
              </a>
              <a
                href={`https://www.pinterest.com/pin/create/button/?url=${socialMediaContent.route}&media=${socialMediaContent.image}&description=${socialMediaContent.content}`}
                target='_blank'>
                <img src='./assets/pinterest-icon.png' />
              </a>
            </div>
          </div>
          {!!Object.keys(productDetails).length && !!productDetails.features.length && (
            <div className='features'>
              {productDetails.features.map(({ feature, value }) => (
                <p>
                  <span>{feature}</span>
                  {`: ${value}`}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
