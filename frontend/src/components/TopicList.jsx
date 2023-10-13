import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

/**
 * 
 * TopicList displays collection of topics 
 */

const TopicList = (props) => {
  const topics = props.topicListData.map((topic) => {
    return (
      <TopicListItem key={topic.id} topicID={topic.id} slug={topic.slug} title={topic.title} onTopicSelected={props.onTopicSelected}/>
    );
  });
  return <section className="top-nav-bar__topic-list">{topics}</section>;
};

export default TopicList;
