import React, { useCallback, useState } from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const [favPhotoSet, toggleFavPhotoSet] = useState(new Set());

  const onPhotoFavorited = (photoId, toggleFavorite) => {
    toggleFavPhotoSet((prevState) => {
      const newFavPhotos = new Set(prevState);
      if (toggleFavorite) {
        newFavPhotos.add(photoId);
      } else {
        newFavPhotos.delete(photoId);
      }
      props.setDoesFavPhotoExist(newFavPhotos.size > 0);

      return newFavPhotos;
    });
};
  const photos = props.photoListData.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        location={photo.location}
        urls={photo.urls}
        user={photo.user}
        onPhotoFavorited={(isFavorited) =>
          onPhotoFavorited(photo.id, isFavorited)
        }
      />
    );
  });
  return <section className="photo-list">{photos}</section>;
};

export default PhotoList;
