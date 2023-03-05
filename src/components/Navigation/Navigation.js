import React from 'react';

import { Link } from 'react-router-dom';
import { Container, List, NavigationWrapper } from './Navigation.css';

function Navigation({ items = [], RightElement }) {
  return (
    <Container>
      <NavigationWrapper>
        <List>
          {items.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>{item.content}</Link>
            </li>
          ))}
        </List>
        {RightElement}
      </NavigationWrapper>
    </Container>
  );
}

export default Navigation;
