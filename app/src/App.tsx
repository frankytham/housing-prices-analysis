import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { ListingProvider } from './contexts/ListingContext';

import Header from './components/Header';
import BackgroundMedia from './components/BackgroundMedia';
import Home from './views/Home';
import Result from './views/Result';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32'
    }
  },
  typography: {
    fontFamily: [
      '"Roboto"',
      'sans-serif',
    ].join(','),
    h4: {
      fontWeight: 300,
      letterSpacing: '0.05em'
    }
  },
  shape: {
    borderRadius: 0,
  },
});

export default function App() {
  const bgImageUrl = "./img/house-coins-bg.jpg";

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ListingProvider>
          <Header />
          <main>
            <Routes>
              <Route path='/' element={
                <BackgroundMedia imageUrl={bgImageUrl}>
                  <Home />
                </BackgroundMedia>
              } />
              <Route path='/result' element={<Result />} />
            </Routes>
          </main>
          <Footer />
        </ListingProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
