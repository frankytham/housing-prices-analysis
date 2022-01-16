import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import TextInputForm from '../components/TextInputForm';
import PropertyCollection from '../components/PropertyCollection';

const Result = () => {
  const { state } = useLocation();
  const allListings = state;
  return (
    <div className="bg-content">
      <div className="search-bar">
        <Typography variant="body1" className="h4-style">
          Enter a <strong>suburb</strong>
        </Typography>
        <TextInputForm />
      </div>

      <Container>
        {allListings.length > 0 && <PropertyCollection allListings={allListings} />}
      </Container>
    </div>
  )
}

export default Result;
