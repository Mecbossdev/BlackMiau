import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIN';
import Home from './pages/Home';
import theme from './themes';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </ThemeProvider>
  );
}

export default App;