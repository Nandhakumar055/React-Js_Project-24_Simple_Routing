import './index.css'

const About = () => (
  <div id="aboutSection" className="about-main-container">
    <div className="about-container">
      <div className="user-details-container">
        <p className="ui-ux-designer-text">UI/UX DESIGNER</p>
        <h1 className="greeting-text">Hello, My name is Madelyn Torff</h1>
        <p className="description">
          Short text with details about you, what you do or your professional
          career. you can add more information on the about page.
        </p>
        <div className="button-container">
          <a href="#projectSection">
            <button type="button" className="project-button">
              Projects
            </button>
          </a>
          <button type="button" className="linkedin-button">
            LinkedIn
          </button>
        </div>
      </div>
      <div className="banner-image-container">
        <img
          src="https://i.ibb.co/PTfg1MG/Untitled-design-20240104-195622-0000.png"
          className="banner-image"
          alt="BannerImage"
        />
      </div>
    </div>
  </div>
)

export default About
