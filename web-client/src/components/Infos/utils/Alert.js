import React from 'react'
import PropTypes from 'prop-types'
import { Alert as AlertBoot } from 'reactstrap'

import Expire from '../../Expire'
import './Alert.scss'

const status = [
  'success',
  'error',
  'warning',
  'info'
]

const Alert = (props) => {
  const _onClose=()=>props.onClose(props.id)
  const _selectColor=()=>{
    switch (props.status) {
      case status[0]:
        return 'success'
      case status[1]:
        return 'danger'
      case status[2]:
        return 'warning'
      case status[3]:
        return 'info'
      default:
        return 'dark'
    }
  }
  const _displayTitle = (title) => {
    if (title === 'undefined')
      return <h5 className="alert-heading">{title}</h5>
  }
  return(
    <Expire delay={props.delay} onExpire={_onClose}>
      <AlertBoot color={_selectColor()} isOpen={true} toggle={_onClose}>
        {_displayTitle(props.title)}
        {props.message}
      </AlertBoot>
    </Expire>
  )
}

Alert.propTypes = {
  id: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  delay:PropTypes.number,
  title:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  message:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  status:PropTypes.oneOf(status),
}

export default Alert
