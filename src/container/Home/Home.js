import React, { Component } from 'react';
import './home.css';
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    const nameStyle = {
      fontSize: 'calc(2vw + 2vh + 3vmin)',
      fontWeight: 'bold',
      letterSpacing: '2px',
      lineHeight: '1.0'
    }

    const portfolioStyle = {
      fontSize: 'calc(2vw + 1vh + 1vmin)',
      fontWeight: '300',
      letterSpacing: '12px'
    }

    const linkStyle = {
      margin: '0 8px',
      color: 'white',
      fontSize: 'calc(1vw + 0.5vh + 1vmin)',
      fontWeight: '600'
    }

    return (
      <div>
        <div className="home-bg">
          <div className="darker-bg">
            <div className="home-contents d-flex align-items-md-center flex-column justify-content-center">
              <div style={nameStyle}>MARK DENVER BABARAN</div>
              <div style={portfolioStyle}>PORTFOLIO</div>
              <div>
                <Link style={linkStyle} to="/works">Works</Link>
                <Link style={linkStyle} to="/about">About</Link>
                <Link style={linkStyle} to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
