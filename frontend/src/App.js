import './App.css';
import { motion } from "framer-motion";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h2>Jershom</h2>
        <div>
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.header 
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I'm Jershom</h1>
        <p>  Data Science postgraduate building machine learning models and 
  data-driven solutions to solve real-world problems.</p>
        <div className="socials">
  <a href="https://github.com/jershomfn" target="_blank">GitHub</a>
  
</div>
<a 
  href="/resume.pdf" 
  target="_blank" 
  className="resume-btn"
>
  Download Resume
</a>
      </motion.header>



      {/* Skills Section */}
      <motion.section 
        className="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Skills</h2>
        <div className="skills-list">
          <span>Python</span>
          <span>Machine Learning</span>
          <span>Data Analysis</span>
          <span>Data Structure</span>
          <span>SQL</span>
          <span>Power BI</span>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
  className="projects"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <h2>Projects</h2>

  <div className="projects-container">

    <div className="project-card">
      <h3>Machine Learning Project</h3>
      <p>Prediction model using Python and ML algorithms.</p>
      <div className="project-buttons">
    <a href="#" target="_blank" rel="noreferrer">Live</a>
    <a href="#" target="_blank" rel="noreferrer">Code</a>
  </div>
    </div>

    <div className="project-card">
      <h3>Data Analysis Dashboard</h3>
      <p>Interactive dashboard built with visualization tools.</p>
      <div className="project-buttons">
    <a href="#" target="_blank" rel="noreferrer">Live</a>
    <a href="#" target="_blank" rel="noreferrer">Code</a>
  </div>
    </div>

    <div className="project-card">
  <h3>AI-Based Smart Surveillance System</h3>
  <p>
    Developed a real-time surveillance system using computer vision to detect 
    collisions, fire, and abnormal crowd behavior using YOLOv8 and OpenCV.
  </p>

  <div className="project-buttons">
    <a 
      href="https://github.com/jershomfn/ai-surveillance-system"
      target="_blank"
      rel="noreferrer"
    >
      View Code
    </a>
  </div>
</div>

  </div>
</motion.section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact</h2>
        <p>Email: jershomfn@email.com</p>
        <p>Phone: 9488585690</p>
      </section>

    </div>
  );
}

export default App;