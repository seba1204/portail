import  { Component } from 'react'
import PropTypes from 'prop-types'

class Expire extends Component{
  componentDidMount(){
    this._startTimer()
  }

  _afterTimerEnded = () => {
    this.props.onExpire()
  }
  _startTimer = () => {this.timer = setTimeout(this._afterTimerEnded, this.props.delay)}

  componentWillUnmount(){
    clearTimeout(this._startTimer)
  }

  render(){
    return this.props.children
  }
}
Expire.propTypes = {
  onExpire: PropTypes.func.isRequired,
  delay: PropTypes.number,
}
Expire.defaultProps = {
  delay:5000
}

export default Expire
