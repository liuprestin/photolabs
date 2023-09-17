import React, {useState} from 'react';

//Components
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

//state of favourite needs to be here 
// state of favourite 

const HomeRoute = (props) => {
  const [doesFavPhotoExist, setDoesFavPhotoExist] = useState(false);

  return (
    <div className="home-route">
      <TopNavigation topicListData={props.topicData} doesFavPhotoExist={doesFavPhotoExist}/>
      <PhotoList photoListData={props.photoData} setDoesFavPhotoExist={setDoesFavPhotoExist} />
    </div>
  );
};

export default HomeRoute;
