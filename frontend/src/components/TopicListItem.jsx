import React from "react";

import "../styles/TopicListItem.scss";

/**
 * 
 * A single Topic Link 
 */

const TopicListItem = (props) => {
  return (
    <div
      className="topic-list__item"
      onClick={() => props.onTopicSelected(props.slug)}
    >
      {props.slug}
    </div>
  );
};

export default TopicListItem;
