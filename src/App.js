import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navigation, Wrapper } from 'components';
import GlobalStyles from 'index.css';
import theme from 'utils/theme';

function App() {
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
              <button>pl</button>
              <button>en</button>
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

export default App;
