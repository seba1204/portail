import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { type } from '../../helpers'
import { Alert } from './utils'

import './Infos.scss'


class Infos extends Component{
  state = {
    infos: []
  }

  componentDidMount(){
    this._matchPropstoState()
  }
  componentDidUpdate(prevProps){
    if (this.props !== prevProps) {
      this._matchPropstoState()
    }
  }
  _matchPropstoState(){
    let infos = this.state.infos
    switch (type(this.props.infos)) {
      case 'Array':
        infos = infos.concat(this.props.infos.filter(v=>!infos.map(e=>e.id).includes(v.id)))
        break;
      case 'Object':
        if (!infos.map(e=>e.id).includes(this.props.infos.id))
          infos.push(this.props.infos)
        break;
      default:
        throw Error('error !')
    }
    this.setState({infos})

  }
  _deleteInfo = (id) => {
    let { infos } = this.state
    infos = infos.filter(info => info.id !== id)
    this.setState({...this.state, infos})
  }
  _displayInfos(){
    if (this.state.infos.length > 0) return (this.state.infos.map(info => {
            return (
                <Alert
                  onClose={this._deleteInfo}
                  id={info.id}
                  delay={5000}
                  title={info.title}
                  message={info.message}
                  status={info.status}
                  key={info.id}
                  >
                </Alert>
            )
          }))
    else return null
  }

  render(){
    return (
      <div className="infos">
        {this._displayInfos()}
      </div>
    )
  }
}


Infos.propTypes = {
  infos: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number})),
    PropTypes.shape({id: PropTypes.number}),
  ]).isRequired
}


export default Infos
