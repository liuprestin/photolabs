import React, { useReducer } from "react";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

//Styles
import "./App.scss";

//more mock data
import photos from "mocks/photos";
import topics from "mocks/topics";

const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
];

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

function appReducer(state, action) {
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
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

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

  const [state, dispatch] = useReducer(appReducer, initialState);

  //For the Modal Screen
  //const [isModalOpen, setIsModalOpen] = useState(false);
  //const [selectedPhoto, setSelectedPhoto] = useState(null);

  // State for individual photos
  //const [favPhotoSet, toggleFavPhotoSet] = useState(new Set());

  /*
  //For the Modal
  const handleClickedPhoto = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const exitModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  
  // for the global state of the photofavouritse
  const [doesFavPhotoExist, setDoesFavPhotoExist] = useState(false);
  const onPhotoFavorited = (photoId, toggleFavorite) => {
    toggleFavPhotoSet((prevState) => {
      const newFavPhotos = new Set(prevState);
      if (toggleFavorite) {
        newFavPhotos.add(photoId);
      } else {
        newFavPhotos.delete(photoId);
      }
      setDoesFavPhotoExist(newFavPhotos.size > 0);

      return newFavPhotos;
    });
  };
  */

  const handleClickedPhoto = (photo) => {
    dispatch({ type: "OPEN_MODAL", payload: photo });
  };

  const exitModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const onPhotoFavorited = (photoId, toggleFavorite) => {
    dispatch({
      type: "TOGGLE_FAV_PHOTO",
      payload: { photoId, toggleFavorite },
    });
  };

  return (
    <div className="App">
      <HomeRoute
        photoData={photos}
        topicData={topics}
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
          photoData={photos}
          onClickPhoto={handleClickedPhoto}
          favPhotoSet={state.favPhotoSet}
        />
      )}
    </div>
  );
};

export default App;
