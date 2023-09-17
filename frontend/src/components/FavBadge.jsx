import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ doesFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!doesFavPhotoExist} selected={!!doesFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;