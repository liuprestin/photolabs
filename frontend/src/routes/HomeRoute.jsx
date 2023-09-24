import React from "react";

//Components
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

import "../styles/HomeRoute.scss";

/**
 * 
 * @param {photoData, topicData, onClickPhoto, favPhotoSet, onPhotoFavorited, doesFavPhotoExist, } props 
 * 
 */

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation
        topicListData={props.topicData}
        doesFavPhotoExist={props.doesFavPhotoExist}
      />
      <PhotoList
        styleContext="homeroute"
        photoListData={props.photoData}
        onPhotoFavorited={props.onPhotoFavorited}
        onClickPhoto={props.onClickPhoto}
        favPhotoSet={props.favPhotoSet}
      />
    </div>
  );
};

export default HomeRoute;
