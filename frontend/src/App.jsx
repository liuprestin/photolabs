import React, { useState, useReducer, useEffect } from "react";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useApplicationData } from "hooks/useApplicationData";
import stateReducer from "hooks/stateReducer";
//Styles
import "./App.scss";


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

  const { photoData, topicData, topicSelectedHandler } = useApplicationData() || {};



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
