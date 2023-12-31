import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

/**
 * A Component with single photo and associated 
 * details. 
 *  
 */

const PhotoListItem = (props) => {
  return (
    <article
      className={`PhotoListItem photo-list__item`}
      id={props.id}
    >
      <PhotoFavButton
        selected={props.favPhotoSet.has(props.id)}
        onFavClick={(isFavorited) =>
          props.onPhotoFavorited(props.id, isFavorited)
        }
      />
      <div onClick={props.onClickPhoto}>
        <img
          className={`photo-list__image`}
          src={props.urls.regular}
        ></img>
      </div>

      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={props.user.profile}
        ></img>
        <div className="">
          <p className="photo-list__user-info">{props.user.name}</p>
          <p className="photo-list__user-info">{props.user.username}</p>
          <p className="photo-list__user-location">
            {props.location.city}, {props.location.country}
          </p>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
