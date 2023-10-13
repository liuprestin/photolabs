import React from "react";

//Components
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

import "../styles/HomeRoute.scss";

/**
 * HomePage component
 */

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation
        topicListData={props.topicData}
        onTopicSelected={props.onTopicSelected}
        doesFavPhotoExist={props.doesFavPhotoExist}
      />
      <PhotoList
        photoListData={props.photoData}
        onPhotoFavorited={props.onPhotoFavorited}
        onClickPhoto={props.onClickPhoto}
        favPhotoSet={props.favPhotoSet}
      />
    </div>
  );
};

export default HomeRoute;
