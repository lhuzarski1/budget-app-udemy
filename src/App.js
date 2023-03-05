import React from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LoadingIndicator, Navigation, Wrapper, Button } from 'components';
import GlobalStyles from 'index.css';
import theme from 'utils/theme';

function App() {
  const { i18n } = useTranslation();
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navigation
          items={[
            { content: 'Homepage', to: '/' },
            { content: 'Budget', to: '/budget' },
          ]}
          RightElement={
            <div>
              <Button onClick={() => i18n.changeLanguage('pl')}>pl</Button>
              <Button onClick={() => i18n.changeLanguage('en')}>en</Button>
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
    </>
  );
}

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator />}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  );
}

export default RootApp;
