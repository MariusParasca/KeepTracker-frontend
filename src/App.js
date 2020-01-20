import React from 'react';
import Routes from 'routes';
import { ThemeProvider } from '@material-ui/core';

import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
