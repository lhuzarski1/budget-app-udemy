import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LoadingIndicator, Navigation, Wrapper, Button } from 'components';
import GlobalStyles from 'index.css';
import theme from 'utils/theme';
import Budget from 'pages/Budget/Budget';

function App({ budget, fetchBudget, fetchBudgetCategories }) {

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
            <Route exact path="/" element={<div>Homepage</div>} />
            <Route path="/budget" element={<Budget />} />
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
