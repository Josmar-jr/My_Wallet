import React from 'react';
import { Layout } from './components/Layout';

import GlobalStyles from './styles/Global-styles';
import { ThemeProvider } from 'styled-components';
import { Dark } from './styles/themes/dark';
// import { Light } from './styles/themes/light';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Dark}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
