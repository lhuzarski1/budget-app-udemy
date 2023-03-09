import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LoadingIndicator, Navigation, Wrapper, Button } from 'components';
import GlobalStyles from 'index.css';
import theme from 'utils/theme';
import {
  fetchBudget,
  fetchBudgetCategories,
} from 'data/actions/budget.actions';

function App({ budget, fetchBudget, fetchBudgetCategories }) {
  useEffect(() => {
    fetchBudget(1);
    fetchBudgetCategories(1);
  }, [fetchBudget, fetchBudgetCategories]);

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

const ConnectedApp = connect((state) => {
  return (
    {
      budget: state.budget.budget,
    },
    {
      fetchBudget,
      fetchBudgetCategories,
    }
  );
})(App);

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator />}>
        <ConnectedApp />
      </React.Suspense>
    </ThemeProvider>
  );
}

export default RootApp;
