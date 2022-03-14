import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const List = styled.ul({
  display: 'flex',
  listStyle: 'none',
  padding: 0,
});

const Item = styled.li({
  marginRight: '1em',
  '& a': {
    color: '#333',
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
      fontWeight: 'bold',
      color: '#000',
    },
  },
});

export default function HomePage() {
  return (
    <div>
      <h2>Home</h2>
      <List>
        <Item>
          <Link to="/about">About</Link>
        </Item>
        <Item>
          <Link to="/login">Log in</Link>
        </Item>
        <Item>
          <Link to="/restaurants">Restaurants</Link>
        </Item>
        <Item>
          <Link to="/xxx">멸망의 길</Link>
        </Item>
      </List>
    </div>
  );
}
