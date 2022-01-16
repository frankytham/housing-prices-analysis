import React from 'react';
import Slider from "react-slick";
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import PropertyThumb from './PropertyThumb';

const ProjectCard = ({ project }) => {
  console.log(project);
  const {
    listings,
    project: {
      id,
      projectSlug,
      name,
      // bannerUrl,
      // logoUrl,
      displayableAddress,
      media
    }
  } = project;

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <Card
      elevation={1}
      key={id}
      sx={{
        marginTop: '3em',
        marginBottom: '3em'
      }}
      className="project-card"
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ 
              width: 56,
              height: 56
            }}
          >
            BBB
          </Avatar>
        }
        title={name}
      />
      <CardMedia
        component="img"
        height="350"
        image={media[0].url}
        alt={projectSlug}
      />
      <CardContent>
        <Typography variant="h5">
          {name}
        </Typography>
        <Typography
          variant="caption"
          color="#afafaf"
        >
          {displayableAddress}
        </Typography>
      </CardContent>
      
      <div className="listings-carousel">
        <Slider {...settings}>
          {listings.map((listing, i) => (
            <div key={i}>
              <PropertyThumb listing={listing} />
            </div>
          ))}
        </Slider>
      </div>
    </Card>
  )
}

export default ProjectCard;
