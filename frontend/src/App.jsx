import React, { useState, useReducer, useEffect } from "react";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

import stateReducer from "hook/useApplicationData";
//Styles
import "./App.scss";

//API url
const serverUrl = 'http://localhost:8001';


const topicSelectedHandler = async (topicId) => {
  try {
    const response = await fetch(serverUrl + `/api/topics/photos/${topicId}`);
    const data = await response.json();
    setPhotoData(data);
  } catch (error) {
    console.error(`Error fetching photos for topic ${topicId}:`, error);
  }
};

// Root of the Application
// holds the state from at the top to be propigated down the tree of components
// events from other components update the state here
const App = () => {
  const initialState = {
    isModalOpen: false,
    selectedPhoto: null,
    favPhotoSet: new Set(),
    doesFavPhotoExist: false,
  };

  const [state, dispatch] = useReducer(stateReducer, initialState);

  const onPhotoFavorited = (photoId, toggleFavorite) => {
    dispatch({
      type: "TOGGLE_FAV_PHOTO",
      payload: { photoId, toggleFavorite },
    });
  };

  // for the Modal
  const handleClickedPhoto = (photo) => {
    dispatch({ type: "OPEN_MODAL", payload: photo });
  };

  const exitModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  //------------Fetching Data----------------

  const [photoData, setPhotoData] = useState([]);
  const [topicData, setTopicData] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(serverUrl + '/api/photos');
        const data = await response.json();
        setPhotoData(data);
      } catch (err) {
        console.error('Error fetching photos:', err);
      }
    };

    const fetchTopics = async () => {
      try {
        const response = await fetch(serverUrl + '/api/topics');
        const data = await response.json();
        setTopicData(data);
      } catch (err) {
        console.error('Error fetching topics:', err);
      }
    };

    fetchPhotos();
    fetchTopics();
  }, []);


  //------------Render ----------------------
  return (
    <div className="App">
      <HomeRoute
        photoData={photoData}
        topicData={topicData}
        onTopicSelected={topicSelectedHandler}
        onClickPhoto={handleClickedPhoto}
        favPhotoSet={state.favPhotoSet}
        onPhotoFavorited={onPhotoFavorited}
        doesFavPhotoExist={state.doesFavPhotoExist}
      />
      {state.isModalOpen && (
        <PhotoDetailsModal
          photo={state.selectedPhoto}
          onPhotoFavorited={onPhotoFavorited}
          onExit={exitModal}
          photoData={photoData}
          onClickPhoto={handleClickedPhoto}
          favPhotoSet={state.favPhotoSet}
        />
      )}
    </div>
  );
};

export default App;
