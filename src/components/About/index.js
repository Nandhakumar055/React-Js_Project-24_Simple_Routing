// Write your JS code here
import {Component} from 'react'
import './index.css'

class About extends Component {
  render() {
    return (
      <>
        <img
          className="page-image"
          src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
          alt="about"
        />
        <h1 className="page-name">About</h1>
        <p className="about-text">
          I love to create! I am a fronted web developer
        </p>
      </>
    )
  }
}
export default About
