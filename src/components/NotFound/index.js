// Write your JS code here
import {Component} from 'react'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <>
        <img
          className="page-image"
          src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
          alt="not found"
        />
        <h1 className="page-name">Not Found</h1>
      </>
    )
  }
}

export default NotFound
