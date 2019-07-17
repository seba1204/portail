import React from 'react'
import PropTypes from 'prop-types'

import './PictureButton.css'

const PictureButton = (props) => {
  return (
      <div className="PictureButton">
        <button className="button" onClick={props.onclick}>
          {props.image}
        </button>
      </div>
    )
}
PictureButton.propTypes = {
    onclick : PropTypes.func.isRequired,
    image: PropTypes.object.isRequired
}

export default PictureButton
