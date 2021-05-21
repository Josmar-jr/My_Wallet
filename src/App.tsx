import React from 'react';

import GlobalStyles from './styles/Global-styles';
import { ThemeProvider } from 'styled-components';
import { Dark } from './styles/themes/dark';
import Routes from './routes';
// import { Light } from './styles/themes/light';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Dark}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
