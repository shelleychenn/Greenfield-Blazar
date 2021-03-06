import React from 'react';

function getStars(value) {
  let starIcon = {
    wholeStar: (
      <span aria-hidden="true" className="full-star">
        ★
      </span>
    ),
    threeFourthStar: (
      <span aria-hidden="true" className="three-Fourth-star">
        ★
      </span>
    ),
    halfStar: (
      <span aria-hidden="true" className="half-star">
        ★
      </span>
    ),
    oneFourthStar: (
      <span aria-hidden="true" className="one-fourth-star">
        ★
      </span>
    ),
    emptyStar: (
      <span aria-hidden="true" className="empty-star">
        ★
      </span>
    ),
  };

  const stars = [];
  const [whole, part] = value ? value.toString().split('.') : [0, 0];

  for (let i = 0; i < whole; i++) {
    stars.push(starIcon.wholeStar);
  }

  if (part) {
    let num = part.toString();
    if (num >= 7.5) {
      stars.push(starIcon.threeFourthStar);
    } else if (num >= 5) {
      stars.push(starIcon.halfStar);
    } else if (num >= 2.5) {
      stars.push(starIcon.oneFourthStar);
    }
  }

  for (let j = whole; j < (part ? 4 : 5); j++) {
    stars.push(starIcon.emptyStar);
  }

  return stars;
}

const StarRating = ({ value, onMouseEnter = () => {}, onMouseLeave = () => {}, onClickStars }) => {
  return (
    <span className="stars">
      {getStars(value).map((star, index) => (
        <span
          key={index}
          onMouseEnter={() => {
            onMouseEnter(index + 1);
          }}
          onMouseLeave={onMouseLeave}
          onClick={onClickStars}
        >
          {star}
        </span>
      ))}
    </span>
  );
};

export default StarRating;
