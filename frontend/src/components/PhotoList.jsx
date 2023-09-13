import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = (props) => {
  const photos = props.photoListData.map(photo => {
    return (
    <PhotoListItem
      key={photo.id}
      location={photo.location} 
      urls={photo.urls} 
      user={photo.user}  />)
  });
  return (
    <section className="photo-list">
      {photos}
    </section>
  );
};

export default PhotoList;
