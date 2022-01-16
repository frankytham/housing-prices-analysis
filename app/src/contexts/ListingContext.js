import React, { createContext, useReducer } from 'react';
import { listingReducers } from '../reducers/listingReducers';

export const ListingContext = createContext();

export const ListingProvider = ({ children }) => {
  const [allListings, dispatch] = useReducer(listingReducers, []);

  return (
    <ListingContext.Provider value={{allListings, dispatch}}>
      {children}
    </ListingContext.Provider>
  );
};
