import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button
} from '@mui/material';

import {
  LISTINGS_SUCCESS,
  LISTINGS_FAIL
} from '../reducers/constants';
import { ListingContext } from '../contexts/ListingContext';

const TextInputForm = () => {
  const { allListings, dispatch } = useContext(ListingContext);
  // const [value, setValue] = useState(null);
  // const [locationOptions, setLocationOptions] = useState([]);
  const [suburb, setSuburb] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // // Get listings
    // fetch('data/sample.json',{
		// 	headers : { 
		// 		'Content-Type': 'application/json',
		// 		'Accept': 'application/json'
		// 	}
		// }).then((response) => response.json())
		// .then((data) => {
    //   setListings(data);
    //   console.log(listings);
		// })
    //   .catch((error) => console.log(error));
    
    // // Get suburbs/postcodes
    // fetch('data/australian_postcodes.json',{
    //   headers : { 
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //   }
    // }).then((response) => response.json())
    //   .then((data) => {
    //     data.map((datum) => setLocationOptions([
    //       ...locationOptions,
    //       {su: datum.SA2_NAME_2016},
    //       {su: datum.postcode}
    //     ]));
    //     console.log(data);
    //   // setLocationOptions(data);
    //   // console.log(locationOptions);
    // })
    //   .catch((error) => console.log(error));
  }, []);

  const postSuburb = (event) => {
    event.preventDefault();
    
    console.log(allListings);
    console.log(loading);

    
    setLoading(true);


    fetch(`https://housing-prices-analysis.azurewebsites.net/api/list?${process.env.REACT_APP_FUNCTION_API_PARAM}=${process.env.REACT_APP_FUNCTION_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        suburb: suburb
      })
    })
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: LISTINGS_SUCCESS, payload: data.listings });
      setSuburb('');
      setLoading(false);
      navigate('/result', { state: data.listings });
    })
    .catch((error) => {
      dispatch({ type: LISTINGS_FAIL, payload: error.message });
    });


    // Fetch listings from sample data
    /* fetch('/data/sample.json',{
      	headers : { 
      		'Content-Type': 'application/json',
      		'Accept': 'application/json'
      	}
      }).then((response) => response.json())
      .then((data) => {
        dispatch({ type: LISTINGS_SUCCESS, payload: data.listings });
        setSuburb('');
        setLoading(false);
        navigate('/result', { state: data.listings });
      })
      .catch((error) => {
        dispatch({ type: LISTINGS_FAIL, payload: error.message });
      }); */
  };

  const handleChange = (event) => {
    setSuburb(event.target.value);

    // Autocomplete Attempt
    /* if (suburb.split('').length > 1) {
      // Get suburbs/postcodes
      fetch('data/australian_postcodes.json',{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then((response) => response.json())
        .then((data) => {
          suburb.split('').map(char => (
            setLocationOptions(data.map(datum => {
              if (datum.postcode.split('').indexOf(char) > -1 && datum.postcode.split('').indexOf(char) === suburb.split('').indexOf(char)) {
                return datum.postcode;
              } else if (datum.postcode.split('').indexOf(char) > -1 && datum.SA3_NAME_2016.split('').indexOf(char) === suburb.split('').indexOf(char)) {
                return datum.SA3_NAME_2016;
              }
            }))
          ));
          // console.log(`locationOptions: ${locationOptions}`);
          console.log(locationOptions);
      })
        .catch((error) => console.log(error));
    } */
  };

  return (
    <>
      <form id="suburb-form" onSubmit={postSuburb}>
          <TextField 
            type="text" 
            id="suburb" 
            className="suburb-form-input" 
            placeholder="Suburb" 
            value={suburb} 
            onChange={handleChange}
          />
        <Button variant="contained" type="submit">Submit</Button>
      </form>
    </>
  )
}

export default TextInputForm;
