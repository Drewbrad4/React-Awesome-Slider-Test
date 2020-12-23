import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import Title from './Title'
import AboutMe from './AboutMe'
import Skills from './Skills'

export default class Slider extends Component{
  render(){
    return(
      <AwesomeSlider
        cssModule={AwesomeSliderStyles}
        className="aws-btn"
        bullets="false"
      >
        <div><Title /></div>
        <div><AboutMe /></div>
        <div><Skills /> </div>
      </AwesomeSlider>
    )
  }
};