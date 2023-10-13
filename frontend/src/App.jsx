import React from "react";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useApplicationData } from "hooks/useApplicationData";

//Styles
import "./App.scss";

// Root of the Application
// holds the state from at the top to be propigated down the tree of components
// events from other components update the state here
const App = () => {

  //------------Fetching Data and State ----------------

  const { photoData,
    topicData,
    onPhotoFavorited,
    handleClickedPhoto,
    exitModal,
    state,
    topicSelectedHandler } = useApplicationData() || {};


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
