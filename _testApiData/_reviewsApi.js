// http://18.224.200.47/reviews/2/list
// a list of reviews for a particular product, does not include any reported reviews.

const reviews = {
  product: '7',
  page: 0,
  count: 5,
  results: [
    // {
    //   review_id: 13,
    //   rating: 5,
    //   summary: 'Ye is good at everything',
    //   recommend: 0,
    //   response: '',
    //   body: 'I mortgaged my house to pay for these',
    //   date: '2018-12-13T00:00:00.000Z',
    //   reviewer_name: 'yecrazy',
    //   helpfulness: 2,
    //   photos: [],
    // },
    // {
    //   review_id: 14,
    //   rating: 1,
    //   summary:
    //     "I don't like Kanye. I don't like Kanye. I don't like Kanye. I don't like Kanye.",
    //   recommend: 0,
    //   response: '',
    //   body: "I didn't buy the shoes but I don't like the man behind them",
    //   date: '2018-11-11T00:00:00.000Z',
    //   reviewer_name: 'taylor',
    //   helpfulness: 0,
    //   photos: [],
    // },

    {
      review_id: 5,
      rating: 3.5,
      summary: "I'm enjoying wearing these shades.",
      recommend: 0,
      response: '',
      body: 'Comfortable and practical.',
      date: '2019-04-14T00:00:00.000Z',
      reviewer_name: 'shortandsweeet',
      helpfulness: 5,
      photos: [
        {
          id: 1,
          url:
            'https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/c6c5c2caafc8405b8e4baaff00e21e50_9366/ultraboost-20-shoes.jpg',
        },
        {
          id: 2,
          url:
            'https://www.netwhilesale.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/Q/u/Questar_Ride_Shoes_White_DB1367_02_hover_frv.jpg',
        },
      ],
    },
    // {
    //   review_id: 57344,
    //   rating: 5,
    //   summary: 'Perfect',
    //   recommend: 0,
    //   response: null,
    //   body: "I really like this product. I love it! I'll go get more.",
    //   date: '2020-05-20T00:00:00.000Z',
    //   reviewer_name: 'satisfiedCustomer',
    //   helpfulness: 0,
    //   photos: [],
    // },
    // {
    //   review_id: 57345,
    //   rating: 3,
    //   summary: "It's okay",
    //   recommend: 0,
    //   response: null,
    //   body: "It doesn't fit me well. I want a refund. to make this happen.",
    //   date: '2020-05-20T00:00:00.000Z',
    //   reviewer_name: 'unsatisfiedcustomer',
    //   helpfulness: 0,
    //   photos: [],
    // },
  ],
};

export default reviews;
