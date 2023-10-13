import { useState, useEffect } from 'react';

export const useApplicationData = () => {
  const [photoData, setPhotoData] = useState([]);
  const [topicData, setTopicData] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('/api/photos');
        const data = await response.json();
        setPhotoData(data);
      } catch (err) {
        console.error('Error fetching photos:', err);
      }
    };

    const fetchTopics = async () => {
      try {
        const response = await fetch('/api/topics');
        const data = await response.json();
        setTopicData(data);
      } catch (err) {
        console.error('Error fetching topics:', err);
      }
    };

    fetchPhotos();
    fetchTopics();
  }, []);

  const topicSelectedHandler = async (topicId) => {
    try {
      const response = await fetch(`/api/topics/photos/${topicId}`);
      const data = await response.json();
      setPhotoData(data);
    } catch (error) {
      console.error(`Error fetching photos for topic ${topicId}:`, error);
    }
  };

  return {
    photoData,
    topicData,
    topicSelectedHandler
  };
};