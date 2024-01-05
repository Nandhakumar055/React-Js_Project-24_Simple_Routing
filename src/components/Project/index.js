import './index.css'

const Project = props => {
  const {projectDetails} = props
  const {
    projectName,
    projectLink,
    projectDescription,
    projectThumbnailUrl,
    interChangeStyle,
  } = projectDetails

  const projectCardStyle = interChangeStyle
    ? 'project-card-item-1'
    : 'project-card-item-2'

  const projectThumbnailStyle = interChangeStyle
    ? 'project-thumbnail-1'
    : 'project-thumbnail-2'

  return (
    <li className={projectCardStyle}>
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
        className={projectThumbnailStyle}
        alt="projectThumbnail"
      />
    </li>
  )
}

export default Project
