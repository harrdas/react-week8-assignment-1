import React from 'react';

import styled from '@emotion/styled';

import palette from '../../lib/styles/palette';

const RestaurantsBlock = styled.ul({
  margin: 0,
  padding: '.4em 0',
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
});

const RestaurantItem = styled.li({
  margin: '.4rem',
  '& a': {
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: 'bold',
    padding: '0.25rem 1rem',
    color: 'white',
    outline: 'none',
    textDecoration: 'none',
    background: palette.Teal[5],
    '&:hover': {
      background: palette.Teal[4],
    },
  },
});

const Restaurants = ({ restaurants, onClick }) => (
  <RestaurantsBlock>
    {restaurants.map((restaurant) => (
      <RestaurantItem key={restaurant.id}>
        <a href="/restaurants/1" onClick={onClick(restaurant)}>
          {restaurant.name}
        </a>
      </RestaurantItem>
    ))}
  </RestaurantsBlock>
);

export default Restaurants;
