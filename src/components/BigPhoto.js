import React from 'react'
import Palette from './Palette'
import LikesSection from './LikesSection';

function BigPhoto(props) {
  const image = props.image.tags.splice(3)

  return (
    <div id="single-image">
      <img alt="" src={image.urls.regular} />
      <Palette palette={image.palette} />
      <LikesSection image={props.image} />
    </div>
  )
}

export default BigPhoto