// Write your JS code here
import {Component} from 'react'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <img
          className="page-image"
          src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
          alt="home"
        />
        <h1 className="page-name">Home</h1>
      </>
    )
  }
}
export default Home
