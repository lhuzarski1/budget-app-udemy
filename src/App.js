import React from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navigation, Wrapper } from 'components';
import GlobalStyles from 'index.css';
import theme from 'utils/theme';

function App() {
  const { i18n } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navigation
          items={[
            { content: 'Homepage', to: '/' },
            { content: 'Budget', to: '/budget' },
          ]}
          RightElement={
            <div>
              <button onClick={() => i18n.changeLanguage('pl')}>pl</button>
              <button onClick={() => i18n.changeLanguage('en')}>en</button>
            </div>
          }
        />
        <Wrapper>
          <Routes>
            <Route exact path="/">
              Homepage
            </Route>
            <Route path="/budget">Budget</Route>
          </Routes>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

function RootApp() {
  return (
    <React.Suspense fallback="Loading....">
      <App />
    </React.Suspense>
  );
}

export default RootApp;
