import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import {RiInstagramFill} from 'react-icons/ri'
import {FaLinkedin} from 'react-icons/fa'
import {IoIosMail} from 'react-icons/io'
import {MdOutlineCopyright} from 'react-icons/md'

import Header from '../Header'
import About from '../About'
import Project from '../Project'
import './index.css'

const projectThumbnailList = [
  {
    id: 0,
    imageUrl: 'https://i.ibb.co/44V9G7g/pexels-sora-shimazaki-5926382.jpg',
  },
  {
    id: 1,
    imageUrl: 'https://i.ibb.co/BsDYrNM/pexels-vlada-karpovich-4050347.jpg',
  },
  {
    id: 2,
    imageUrl: 'https://i.ibb.co/LY3DW58/pexels-ketut-subiyanto-4474047.jpg',
  },
  {
    id: 3,
    imageUrl: 'https://i.ibb.co/VvgdBqh/pexels-karolina-grabowska-4491451.jpg',
  },
  {
    id: 4,
    imageUrl: 'https://i.ibb.co/SRTGr9Q/pexels-lukas-574071.jpg',
  },
  {
    id: 5,
    imageUrl: 'https://i.ibb.co/hcrz0Bz/pexels-fauxels-3183153.jpg',
  },
  {
    id: 6,
    imageUrl:
      'https://i.ibb.co/GQdnfth/kobu-agency-7okk-Fhxrx-Nw-unsplash-1.jpg',
  },
  {
    id: 7,
    imageUrl: 'https://i.ibb.co/F6wgVVw/marvin-meyer-SYTO3xs06f-U-unsplash.jpg',
  },
]

class Home extends Component {
  state = {
    projectName: '',
    projectLink: '',
    projectDescription: '',
    projectItemList: [],
    isErrorName: false,
    isErrorLink: false,
    isErrorDescription: false,
    interChangeStyle: false,
  }

  onChangeProjectName = event => {
    this.setState({projectName: event.target.value})
  }

  onChangeProjectLink = event => {
    this.setState({projectLink: event.target.value})
  }

  onChangeProjectDescription = event => {
    this.setState({projectDescription: event.target.value})
  }

  onSubmitProject = event => {
    event.preventDefault()

    const randomThumbnailImage = () => {
      const imageLength = projectThumbnailList.length

      const getId = Math.ceil(Math.random() * imageLength - 1)
      const getImageUrl = projectThumbnailList[getId].imageUrl

      return getImageUrl
    }

    const {
      projectName,
      projectLink,
      projectDescription,
      interChangeStyle,
    } = this.state

    if (projectName !== '' && projectLink !== '' && projectDescription !== '') {
      const newProjectItem = {
        id: uuid(),
        projectName,
        projectLink,
        projectDescription,
        projectThumbnailUrl: randomThumbnailImage(),
        interChangeStyle: !interChangeStyle,
      }
      this.setState(prevState => ({
        projectItemList: [...prevState.projectItemList, newProjectItem],
        projectName: '',
        projectLink: '',
        projectDescription: '',
        interChangeStyle: !prevState.interChangeStyle,
      }))
    }

    if (projectName === '') {
      this.setState({isErrorName: true})
    } else {
      this.setState({isErrorName: false})
    }

    if (projectLink === '') {
      this.setState({isErrorLink: true})
    } else {
      this.setState({isErrorLink: false})
    }

    if (projectDescription === '') {
      this.setState({isErrorDescription: true})
    } else {
      this.setState({isErrorDescription: false})
    }
  }

  render() {
    const {
      projectName,
      projectLink,
      projectDescription,
      projectItemList,
      isErrorName,
      isErrorLink,
      isErrorDescription,
    } = this.state

    const isEmptyProject = projectItemList.length === 0

    return (
      <div className="app-container">
        <Header />
        <About />
        <div className="input-items-container">
          <h1 className="add-project-heading">Add Project</h1>
          <form className="form-container" onSubmit={this.onSubmitProject}>
            <label htmlFor="ProjectName" className="label">
              Project Name
            </label>
            <input
              className="input-item"
              id="ProjectName"
              onChange={this.onChangeProjectName}
              value={projectName}
            />
            {isErrorName ? (
              <p className="error-msg">*Please enter project name</p>
            ) : (
              ''
            )}
            <label htmlFor="ProjectLink" className="label">
              Project link
            </label>
            <input
              className="input-item"
              id="ProjectLink"
              onChange={this.onChangeProjectLink}
              value={projectLink}
            />
            {isErrorLink ? (
              <p className="error-msg">*Please enter project link</p>
            ) : (
              ''
            )}
            <label htmlFor="Description" className="label">
              Description
            </label>
            <textarea
              className="input-description"
              id="Description"
              onChange={this.onChangeProjectDescription}
              value={projectDescription}
            />
            {isErrorDescription ? (
              <p className="error-msg">*Please enter project description</p>
            ) : (
              ''
            )}
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
        </div>
        <img
          src="https://i.ibb.co/1Qv6CQM/20240105-082401-0000.png"
          alt="bottomImage"
          className="bottom-image"
        />
        <div id="projectSection" className="project-main-container">
          <h1 className="Project-heading">Projects</h1>
          {isEmptyProject ? (
            <div className="empty-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                className="empty-image"
                alt="emptyImage"
              />
              <h1 className="empty-msg">empty project</h1>
              <p className="empty-error-msg">Please add your projects</p>
            </div>
          ) : (
            <ul className="project-container">
              {projectItemList.map(eachProject => (
                <Project projectDetails={eachProject} key={eachProject.id} />
              ))}
            </ul>
          )}
        </div>
        <div id="contactSection" className="footer-container">
          <div className="social-media-container">
            <RiInstagramFill size="30" className="social-media-icon" />
            <FaLinkedin size="30" className="social-media-icon" />
            <IoIosMail size="35" className="social-media-icon" />
          </div>
          <p className="copyright-text">
            Copyright <MdOutlineCopyright /> 2024. All rights reserved
          </p>
        </div>
        <img
          src="https://i.ibb.co/1Qv6CQM/20240105-082401-0000.png"
          alt="bottomImage"
          className="bottom-image"
        />
      </div>
    )
  }
}
export default Home
