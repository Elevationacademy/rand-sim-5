import React from 'react';
import { Link } from 'react-router-dom'

function SmallPhoto(props) {
  const image = props.image

  return (
    <div className="image">
      <div className="grid-sizer"></div>
      <Link className="grid-item" to={`image/${image.id}`}><img alt="" src={image.url} /></Link>
    </div>
  )
}

export default SmallPhoto