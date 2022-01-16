import React from 'react';
import Typography from '@mui/material/Typography';

import TextInputForm from '../components/TextInputForm';

const Home = () => {
  return (
    <div className="bg-content-overlay">
      <Typography variant="h4" className="h4-style">
        Enter a <strong>suburb</strong>
      </Typography>
      <TextInputForm />
    </div>
  )
}

export default Home;
