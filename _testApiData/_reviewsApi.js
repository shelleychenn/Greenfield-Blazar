// http://18.224.200.47/reviews/2/list
// a list of reviews for a particular product, does not include any reported reviews.

const reviews = {
  product: '7',
  page: 0,
  count: 5,
  results: [
    {
      review_id: 9,
      rating: 5,
      summary: 'These pants are great!',
      recommend: 0,
      response: '',
      body: 'I really like these pants. Best fit ever!',
      date: '2019-02-18T00:00:00.000Z',
      reviewer_name: 'figuringitout',
      helpfulness: 4,
      photos: [
        {
          id: 4,
          url:
            'https://images.unsplash.com/photo-1542574621-e088a4464f7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3028&q=80',
        },
        {
          id: 5,
          url:
            'https://images.unsplash.com/photo-1560294559-1774a164fb0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 6,
          url:
            'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
      ],
    },
    {
      review_id: 8,
      rating: 4,
      summary: 'These pants are fine',
      recommend: 0,
      response: '',
      body: 'I do like these pants',
      date: '2019-03-21T00:00:00.000Z',
      reviewer_name: 'shopaddict',
      helpfulness: 3,
      photos: [],
    },
    {
      review_id: 10,
      rating: 2,
      summary: 'These pants are ok!',
      recommend: 0,
      response: '',
      body: 'A little tight on the waist.',
      date: '2019-01-05T00:00:00.000Z',
      reviewer_name: 'bigbrother',
      helpfulness: 3,
      photos: [
        {
          id: 7,
          url:
            'https://images.unsplash.com/photo-1549812474-c3cbd9a42eb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          id: 8,
          url:
            'https://images.unsplash.com/photo-1560829675-11dec1d78930?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
        },
        {
          id: 9,
          url:
            'https://images.unsplash.com/photo-1559709319-3ae960cda614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
      ],
    },
  ],
};

export default reviews;
