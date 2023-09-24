import React from "react";

import PhotoDetailsModal from "routes/PhotoDetailsModal";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

/**
 * PhotoList Component Appends PhotoListItem component 
 * to itself and assigns the click handler
 * 
 */

const PhotoList = (props) => {
  const photos = props.photoListData.map((photo) => {
    return (
      <PhotoListItem
        styleContext={props.styleContext}
        key={photo.id}
        id={photo.id}
        location={photo.location}
        urls={photo.urls}
        user={photo.user}
        favPhotoSet={props.favPhotoSet}
        onPhotoFavorited={
          props.onPhotoFavorited
        }
        onClickPhoto={() => props.onClickPhoto(photo)}
      />
    );
  });
  return <section className="photo-list">{photos}</section>;
};

export default PhotoList;
