function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid container">

        <a 
          href="https://your-portfolio-live-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <h3>Portfolio Website</h3>
          <p>React + Vite personal portfolio</p>
        </a>

        <a 
          href="https://github.com/Awais-Roshan01/Tic-Tac-Toe-.git"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <h3>Tic Tac Toe Game</h3>
          <p>Using Html Css & JavaScript</p>
        </a>

        <a 
          href="https://github.com/Awais-Roshan01/To-Do-List-App.git"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <h3>To-Do App with Local Storage</h3>
          <p>Frontend React project</p>
        </a>

      </div>
    </section>
  )
}

export default Projects
