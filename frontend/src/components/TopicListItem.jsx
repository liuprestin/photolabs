import React from "react";

import "../styles/TopicListItem.scss";

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
