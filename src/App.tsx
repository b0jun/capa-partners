import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './routes/Router';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/Theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Router />
  </ThemeProvider>
);
export default App;
