function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid container">

        <a
          href="https://portfolio-project-ten-rust.vercel.app/"
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
        
        <a 
          href="https://github.com/Awais-Roshan01/URL_Shortener"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <h3>URL_Shortener</h3>
          <p>Using Next.js + Mongodb as a database</p>
        </a>

         <a 
          href="https://github.com/Awais-Roshan01/PasswordManager-React"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <h3>Your Password Manager</h3>
          <p>To keep your password safe and make it easy to manage</p>
        </a>
        

      </div>
    </section>
  )
}

export default Projects
