import React from 'react'

function LikesSection(props) {
  const image = props.image

  return (
    <div id="likes-section">
      <div id="likes"><i className="fas fa-thumbs-up"></i>{image.likes}</div>
      <div id="tags">
          {image.tags.map((p, i) => <span className="tag" key={i}>{p}</span>)}
      </div>
      <div id="camera"><i className="fas fa-camera"></i>{image.camera.make}</div>
    </div>
  )
}

export default LikesSection