import {
  LISTINGS_SUCCESS,
  LISTINGS_FAIL
} from './constants';

export const listingReducers = (state, action) => {
  switch (action.type) {
    case LISTINGS_SUCCESS:
      return [...action.payload]
    case LISTINGS_FAIL:
      return [{ error: action.payload }];
    default:
      return state;
  }
};
