import React, { Component } from 'react';
import SearchSection from './SearchSection';
import ImageSection from './ImageSection';

function Home(props) {
  return (
    <div>
      <SearchSection requestPhotos={props.requestPhotos} />
      {props.images.length ? <ImageSection requestPhotos={props.requestPhotos} page={props.page} images={props.images} /> : null}
    </div>
  );
}

export default Home