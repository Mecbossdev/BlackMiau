import React from 'react';
import Home from './pages/Home';
import { ThemeProvider } from '@material-ui/styles';
import theme from './themes';


function App() {
  return <ThemeProvider theme={theme}>
    <Home></Home>
  </ThemeProvider>
}

export default App;