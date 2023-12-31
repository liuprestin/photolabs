import React from "react";

import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

import "../styles/TopNavigationBar.scss";

/**
 * 
 * Navigation Bar component
 */

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicListData={props.topicListData} onTopicSelected={props.onTopicSelected} />
      <FavBadge doesFavPhotoExist={props.doesFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;
