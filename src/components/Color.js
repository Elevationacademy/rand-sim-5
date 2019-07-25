import React from 'react';

function Color(props) {
  const r = props.rgb[0]
  const g = props.rgb[1]
  const b = props.rgb[2]

  return (
    <div className="color-scheme" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}></div>
  )
}

export default Color