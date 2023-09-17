import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    props.onFavClick(!selected);
  };
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} onClick={handleClick}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;