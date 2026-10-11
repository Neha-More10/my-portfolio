function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        NEHA
      </div>

      <div className="navbar-links">
        <a className="active" href="#home">Home</a>
        <a href="#what-i-do">What I Do</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      <a
        className="resume-button"
        href="/CV_Neha_More_DS.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>

    </nav>
  )
}

export default Navbar