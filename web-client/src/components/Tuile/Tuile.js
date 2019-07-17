import React from 'react'
import * as Icon from 'react-feather'
import PropTypes from 'prop-types'

import './Tuile.scss'

const _diplayCloseX = (bool) => {
  if (bool){
    return <Icon.XSquare className="x"/>
  }
}

const _diplayHeader = (props) => {
  if (props.close || props.title){
    return (
      <div className={"header " + (props.title ? 'underBar' : '')}>
        <h5 className={(props.close ? '' : 'textCenter')}>{props.title}</h5>
        {_diplayCloseX(props.close)}
      </div>
    )
  }
}

const Tuile = (props) => {
  return (
    <div className={"tuile " + (props.animated ? 'animated' : '')}>
      {_diplayHeader(props)}
      <div className="children">
        {props.children}
      </div>
    </div>
  )
}

Tuile.propTypes = {
  title: PropTypes.string,
  close: PropTypes.bool.isRequired,
  animated: PropTypes.bool.isRequired,
}
Tuile.defaultProps = {
  close: false,
  animated: false
}
export default Tuile
