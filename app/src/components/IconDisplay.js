import React from 'react';
import BedIcon from '@mui/icons-material/Bed';
import ShowerIcon from '@mui/icons-material/Shower';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import { formatPropertyType } from '../utils/displayFormatter';

const IconDisplay = ({ type, qty }) => {
  
  switch (type) {
    case "bedrooms":
      return (
        <>
          {<BedIcon />} {qty}
        </>
      );
    case "bathrooms":
      return (
        <>
          {<ShowerIcon />} {qty}
        </>
      );
    case "carspaces":
      return (
        <>
          {<DirectionsCarIcon />} {qty}
        </>
      );
    case "buildingArea":
      return (
        <>
          <span style={{ display: 'inline-block', margin: '0 10px' }}>-</span>{qty + 'm'}<sup>2 </sup>
        </>
      );
    case "propertyType":
      return (
        <>
          <span style={{ display: 'inline-block', margin: '0 10px' }}>•</span>{formatPropertyType(qty)}
        </>
      );
    default:
      return null;
  }
}

export default IconDisplay;