import React, { FC } from 'react';

interface BackgroundMediaProps {
  imageUrl: string
}

const BackgroundMedia: FC<BackgroundMediaProps> = ({ imageUrl, children }): JSX.Element => {
  return (
    <div className="body-bg" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="bg-img-overlay">
        {children}
      </div>
    </div>
  )
}

BackgroundMedia.defaultProps = {
  imageUrl: "./img/house-coins-bg.jpg"
};

export default BackgroundMedia;
