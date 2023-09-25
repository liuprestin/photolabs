import React, { useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

/**
 * 
 * The Heart icon that represents if a topic is favourited or not
 * 
 * @param {selected} props 
 * 
 */

function PhotoFavButton(props) {
  const [selected, setSelected] = useState(false);

  const handleClick = (event) => {
    //to prevent interference with other events
    event.stopPropagation();

    setSelected(!selected);
    props.onFavClick(!selected);
  };
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={props.selected} onClick={handleClick} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
