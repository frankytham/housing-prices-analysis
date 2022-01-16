import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const PropertyThumb = ({ listing }) => {
  const {
    id,
    listingSlug,
    media,
    listingType,
    priceDetails: {
      displayPrice
    },
    propertyDetails: {
      bathrooms,
      bedrooms,
      carspaces,
      buildingArea
    }
  } = listing;

  return (
    <Card
      elevation={1}
      key={id}
      sx={{
        margin: '.5em'
      }}
      className="property-thumb"
    >
      <CardMedia
        component="img"
        height="150"
        image={media[0].url}
        alt={listingSlug}
      />
      <CardContent>
        <Typography variant="h5">
          {displayPrice}
        </Typography>
        <Typography
          variant="caption"
          color="#afafaf"
        >
          {listingType}
        </Typography>
        <Typography
          variant="body2"
          color="#8f8f8f"
        >
          {`${bathrooms} bath ${bedrooms} bed ${carspaces} carspaces - ${buildingArea}`}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default PropertyThumb;
