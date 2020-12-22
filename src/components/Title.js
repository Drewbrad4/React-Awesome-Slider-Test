import React, { Component } from 'react';

export default class TitleBox extends Component{
    render(){
        return (
            <div className="title">
              <div className="title-box">
                <h1 id="title">Drew Bradford</h1>
                <h3 id="descrip">Full Stack Web Developer</h3>
                <hr />
                <div className="links">
                  <a className="link" href="#about">About</a>
                  <a className="link" href="#projects">Projects</a>
                  <a className="link" href="#skills">Skills</a>
                  <a className="link" href="#contact">Contact</a>
                </div>
              </div>
            </div>
        );
    }
  }