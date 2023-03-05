import React from 'react';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, List, NavigationWrapper } from './Navigation.css';
import { Button } from 'components';

function Navigation({ items = [], RightElement }) {
  const { t } = useTranslation();
  return (
    <Container>
      <NavigationWrapper>
        <List>
          {items.map((item) => (
            <li key={item.to}>
              <Button variant={'inline'} to={item.to}>
                {t(item.content)}
              </Button>
            </li>
          ))}
        </List>
        {RightElement}
      </NavigationWrapper>
    </Container>
  );
}

export default Navigation;
