
// track the Global State 
// the only component that tracks its own state is PhotoFavButton
function stateReducer(state, action) {
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
  
  export default stateReducer;