import React from 'react';
import Masonry from 'react-masonry-css';
import PropertyCard from './PropertyCard';
import ProjectCard from './ProjectCard';

const PropertyCollection = ({ allListings }) => {
  const breakpoints = {
    default: 2,
    1100: 2,
    700: 1
  };

  return (
    <Masonry
      container="true"
      breakpointCols={breakpoints}
      spacing={3}
      className="collections-masonry-grid"
      columnClassName="collections-masonry-grid-column"
    >
      {allListings.map((list, i) => list.type === "PropertyListing" ? <PropertyCard key={i} property={list} /> : <ProjectCard key={i} project={list} />)}
    </Masonry>
  )
}

export default PropertyCollection;
