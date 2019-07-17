import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import * as Icon from 'react-feather'

import PictureButton from '../PictureButton'

import './Header.scss'

class Header extends Component {

  _goHome = () => { this.props.history.push(`/`) }

  render = () => {
    return(
      <div className="topHeader">
        <div className="home">
          <PictureButton image={<Icon.Home/>} onclick={this._goHome}/>
        </div>
        <h1>Maison du mas !</h1>
      </div>
    )

  }
}

export default withRouter(Header)
