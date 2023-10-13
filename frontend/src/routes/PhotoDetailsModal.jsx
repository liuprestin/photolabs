import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "../components/PhotoFavButton";
import PhotoList from "components/PhotoList";

/**
 * Photo Modal Component
 * 
 * Upon Clicking a photo, a modal is toggled revealing 
 * a photo and its associated information
 * 
 * Also renders the included similar photos
 */

const PhotoDetailsModal = (props) => {
  return (
    <div className="photo-details-modal" onClick={props.onExit}>
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <PhotoFavButton
        selected={props.favPhotoSet.has(props.photo.id)}
        onFavClick={(isFavorited) =>
          props.onPhotoFavorited(props.photo.id, isFavorited)
        }
      />
      <div onClick={props.photo.onClickPhoto}>
        <img
          className="photo-details-modal__image"
          src={props.photo.urls.regular}
        ></img>
      </div>

      <div className="photo-details-modal__header">
        <img
          className="photo-list__user-profile"
          src={props.photo.user.profile}
        ></img>
        <div className="">
          <p className="photo-list__user-info">{props.photo.user.name}</p>
          <p className="photo-list__user-info">{props.photo.user.username}</p>
          <p className="photo-list__user-location">
            {props.photo.location.city}, {props.photo.location.country}
          </p>
        </div>
      </div>
      <p className="photo-details-modal__header">Related Photos</p>
      <PhotoList
        photoListData={props.photo.similar_photos}
        onClickPhoto={props.onClickPhoto}
        onPhotoFavorited={props.onPhotoFavorited}
        favPhotoSet={props.favPhotoSet}
      />
    </div>
  );
};

export default PhotoDetailsModal;
