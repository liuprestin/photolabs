import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <article className="PhotoListItem photo-list__item" id={props.id}>
      <PhotoFavButton onFavClick={props.onPhotoFavorited} />
      <img className="photo-list__image" src={props.urls.regular}></img>
      
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
