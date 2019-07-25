import React from 'react';
import SearchSection from './SearchSection';
import ImageSection from './ImageSection';

function Home(props) {
  return (
    <div>
      <SearchSection handleSearch={props.handleSearch} />
      {props.images.length ? (<ImageSection handleSearch={props.handleSearch} page={props.page} images={props.images} />) : null}
    </div>
  );
}

export default Home;
