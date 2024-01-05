import './index.css'

const Project = props => {
  const {projectDetails} = props
  const {
    projectName,
    projectLink,
    projectDescription,
    projectThumbnailUrl,
  } = projectDetails

  console.log(projectThumbnailUrl)

  return (
    <li className="project-card-item">
      <div className="project-details-container">
        <h1 className="project-name">{projectName}</h1>
        <p className="project-description">{projectDescription}</p>
        <a href={projectLink}>
          <button className="view-project-button" type="button">
            View Project
          </button>
        </a>
      </div>
      <img
        src={projectThumbnailUrl}
        className="project-thumbnail"
        alt="projectThumbnail"
      />
    </li>
  )
}

export default Project
