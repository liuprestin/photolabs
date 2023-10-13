import { useState, useEffect, useReducer } from 'react';

export const useApplicationData = () => {
  const [photoData, setPhotoData] = useState([]);
  const [topicData, setTopicData] = useState([]);

  useEffect(() => {
    // PHOTOS API Call
    const fetchPhotos = async () => {
      try {
        const response = await fetch('/api/photos');
        const data = await response.json();
        setPhotoData(data);
      } catch (err) {
        console.error('Error fetching photos:', err);
      }
    };

    // TOPICS API Call
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

  // Handles the Global State 
  const stateReducer = (state, action) => {
    switch (action.type) {
      case "OPEN_MODAL":
        return { ...state, isModalOpen: true, selectedPhoto: action.payload };
  
      case "CLOSE_MODAL":
        return { ...state, isModalOpen: false, selectedPhoto: null };
  
      case "TOGGLE_FAV_PHOTO":
        const newFavPhotos = new Set(state.favPhotoSet);
        if (action.payload.toggleFavorite) {
          newFavPhotos.add(action.payload.photoId);
        } else {
          newFavPhotos.delete(action.payload.photoId);
        }
        return {
          ...state,
          favPhotoSet: newFavPhotos,
          doesFavPhotoExist: newFavPhotos.size > 0,
        };
  
      default:
        throw new Error(`Unsupported action: ${action.type}`);
    }
  }

  const initialState = {
    isModalOpen: false,
    selectedPhoto: null,
    favPhotoSet: new Set(),
    doesFavPhotoExist: false,
  };

  const [state, dispatch] = useReducer(stateReducer, initialState);

  // Photo Button Components track their own state
  const onPhotoFavorited = (photoId, toggleFavorite) => {
    dispatch({
      type: "TOGGLE_FAV_PHOTO",
      payload: { photoId, toggleFavorite },
    });
  };

  // For PhotoDetailsModel
  const handleClickedPhoto = (photo) => {
    dispatch({ type: "OPEN_MODAL", payload: photo });
  };

  const exitModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  // Topics have Integer IDs
  const topicSelectedHandler = async (topicId) => {
    
    console.log(topicId);

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
    onPhotoFavorited,
    handleClickedPhoto,
    exitModal,
    state,
    topicSelectedHandler
  };
};