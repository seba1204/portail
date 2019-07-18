import React, {Component} from 'react'
import {  Button, Spinner } from 'reactstrap'

import './Home.scss'

import Infos from '../../components/Infos'
import Header from '../../components/Header'

import { toogleGate, switchCodes } from '../../api'


class Home extends Component {
  state = {
    infos: [],
    loadingResponse: false
  }

  _id = 0
  _PurgeInfos = false

  _toogleGate = async() => {
    this.setState({...this.state, loadingResponse: true})
    const resp = await toogleGate()
    console.log(resp)
    let newInfo = switchCodes(resp.code)
    this._id++
    let {infos} = this.state
    infos.push({
      ...newInfo,
      id: this._id,
    })
    this.setState({...this.state, infos, loadingResponse: false})
  }
  _getInfos(){
    if (this.state.infos.length>0)
      this._PurgeInfos = true
    return this.state.infos
  }
  componentDidUpdate(){
    if (this._PurgeInfos){
      this._PurgeInfos = false
      this.setState({...this.state, infos: []})
    }
  }
  _displayToogleContent(){
    if(this.state.loadingResponse){
      return <Spinner type="grow" color="primary"/>
    }
    else{
      return "Toogle Gate !"
    }
  }

  render = () => {
    return (
      <div className="mainContainer">
          <Header />
          <div className="contentContainer">
            <Infos className="infos" infos={this._getInfos()}/>
            <h1>Portail</h1>
            <p>Vous pouvez ouvrir ou fermer le portail en appuyant sur le bouton ce-dessous.</p>
            <Button className="toogleButton" color="success" onClick={this._toogleGate}>{this._displayToogleContent()}</Button>
          </div>
      </div>
    )
  }
}

export default Home
