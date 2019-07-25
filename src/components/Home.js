import React from 'react';
import SearchSection from './SearchSection';
import PhotoGallery from './PhotoGallery';

function Home(props) {
  return (
    <div>
      <SearchSection handleSearch={props.handleSearch} />
      {props.images.length ? (<PhotoGallery handleSearch={props.handleSearch} page={props.page} images={props.images} />) : null}
    </div>
  );
}

export default Home;
