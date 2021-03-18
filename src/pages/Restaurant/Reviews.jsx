import React from 'react';

import styled from '@emotion/styled';

import { colors } from '../../styles/Theme';

const Review = styled.li({
  // Box Model Properties
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  margin: '1rem 0',
  padding: '1rem',

  // Visual Properties
  backgroundColor: '#F8F5F2',
  boxShadow:
  '0 3px 2px rgba(0, 0, 0, 0.05),0 7px 5px rgba(0, 0, 0, 0.05)',

});

const Reviewer = styled.div({
  // Box Model Properties
  marginBottom: '.5rem',

  // Visual Properties
  color: colors.orange,

  // Typography Properties
  fontWeight: '500',
});

const Score = styled.span({
  fontWeight: '500',
});

const Description = styled.p({
  color: colors.gray,
});

const Reviews = React.memo(({ reviews }) => {
  if (!reviews || !reviews.length) {
    return null;
  }

  return (
    <ul>
      {reviews.map((review) => (
        <Review key={review.id}>
          <Reviewer>
            {review.name}
          </Reviewer>
          <div>
            <Score>
              {review.score}
              점
            </Score>
          </div>
          <div>
            <Description>
              {review.description}
            </Description>
          </div>
        </Review>
      ))}
    </ul>
  );
});

export default Reviews;
