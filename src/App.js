import React, { Component } from 'react'
import './App.css';
import Slider from './components/Slider'

export default class App extends Component {
  render(){
    return (
      <div className="App">
        <Slider />
      </div>
    );
  }
}