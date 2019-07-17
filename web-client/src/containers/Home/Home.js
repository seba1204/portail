import React, {Component} from 'react'
import { Smile } from 'react-feather'

import Header from '../../components/Header'
import Tuile from '../../components/Tuile'
import PictureButton from '../../components/PictureButton'

import { toogleGate } from '../../api'

import './Home.scss'


class Home extends Component {
  state={
    infos:false
  }
  _diplayInfos = () => {
    if (this.state.infos){
      return (<p>INFOS</p>)
    }
  }

  _toogleGate = async() => {
    console.log(await toogleGate())
  }
  render = () => {

    return (
      <div className="container">
          <Header />
          {this._diplayInfos()}
          <div className="container2">
            <Tuile title="Portail">
              <p>Appuyer sur le bouton pour ouvrir / fermer le portail : </p>
              <div className="divButton">
                <PictureButton onclick={this._toogleGate} image={<Smile/>}/>
              </div>
            </Tuile>
          </div>

      </div>
    )
  }
}

export default Home
