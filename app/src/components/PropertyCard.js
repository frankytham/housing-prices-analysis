import React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { formatListingDate } from '../utils/displayFormatter';
import IconDisplay from './IconDisplay';

const PropertyCard = ({ property }) => {
  console.log(property);
  const {
    listing: {
      id,
      listingSlug,
      advertiser: {
        // bannerUrl,
        // logoUrl,
        name,
        contacts
      },
      dateListed,
      media,
      priceDetails: {
        displayPrice
      },
      propertyDetails: {
        propertyType,
        unitNumber,
        streetNumber,
        street,
        suburb,
        state,
        postcode,
        bathrooms,
        bedrooms,
        carspaces,
        buildingArea
      }
    }
  } = property;

  // console.log(`CONTACTS: ${JSON.stringify(contacts, null, 4)}`);

  return (
    <Card
      elevation={1}
      key={id}
      sx={{
        marginTop: '3em',
        marginBottom: '3em'
      }}
    >
      <CardMedia
        component="img"
        height="350"
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
          {`Listed on ${formatListingDate(dateListed)}`}
        </Typography>
        <Typography
          variant="body2"
          sx={{ margin: '.75em 0' }}
        >
          {unitNumber && <span>{unitNumber}</span>}
          {unitNumber && streetNumber && <span>/</span>}
          {streetNumber && <span>{streetNumber} </span>}
          {street && <span>{street}, </span>}
          {suburb && <span>{suburb} </span>}
          {state && <span>{state} </span>}
          {postcode && <span>{postcode}</span>}
        </Typography>
        <Typography
          variant="body2"
          color="#8f8f8f"
          className="property-detail-icons"
        >
          {bedrooms &&
            <IconDisplay type="bedrooms" qty={bedrooms} />
          }
          {bathrooms &&
            <IconDisplay type="bathrooms" qty={bathrooms} />
          }
          {carspaces &&
            <IconDisplay type="carspaces" qty={carspaces} />
          }
          {buildingArea &&
            <IconDisplay type="buildingArea" qty={buildingArea} />
          }
          {propertyType &&
            <IconDisplay type="propertyType" qty={propertyType} />
          }
        </Typography>
      </CardContent>
      <CardHeader
        avatar={contacts &&
          <Avatar
            sx={{ 
              width: 56,
              height: 56
            }}
            src={contacts.length > 0 ? contacts[0].photoUrl : "/broken-image.jpg"}
          />
        }
        title={contacts.length > 0 ? contacts[0].name : name}
        subheader={contacts.length > 0 && name}
      />
    </Card>
  )
}

export default PropertyCard;
