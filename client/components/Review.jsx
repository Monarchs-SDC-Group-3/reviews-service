import React from 'react';

const Review = (props) => {
  const date = props.review.review_date.slice(0, 10);
  const arrDate = date.split('-');
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  const modifiedDate = `${months[Number(arrDate[1])]} ${arrDate[0]}`;

  return (
    <div className="review">
      <div className="reviewTop">
        <div>
          <img src={props.review.url} className="avatar" key={props.key} />
        </div>
        <div>
          <div className="user">
            {props.review.user}
          </div>
          <div>
            {modifiedDate}
          </div>
        </div>
      </div>
      {props.review.review}
    </div>

  );
};

export default Review;
