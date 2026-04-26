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
        <p className="tagline">Data Science | Machine Learning | Data Engineering</p>
        <p>
         <p>
  Data Science postgraduate specializing in data analysis, machine learning, and predictive modeling. 
  I build scalable pipelines and extract meaningful insights from data to solve real-world problems.
</p>
        </p>

        <div className="socials">
          <a href="https://github.com/jershomfn" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noreferrer"
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
          <span>Data Structures</span>
          <span>SQL</span>
          <span>Power BI</span>
          <span>Computer Vision</span>
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

          {/* Electricity Project */}
          <div className="project-card electricity">
            <h3>Electricity Consumption Analysis & Anomaly Detection</h3>
            <p>
              Built a data processing pipeline using Python (Pandas) to clean, transform, and analyze electricity consumption data, including feature engineering and rule-based anomaly detection, integrated with a Power BI dashboard for visualization.
            </p>
            <a 
              href="https://github.com/jershomfn/electricity-consumption-analysis"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>

          {/* Sentiment Project */}
          <div className="project-card">
            <h3>Scalable Sentiment Analysis Pipeline</h3>
            <p>
              Built a distributed sentiment analysis pipeline using PySpark for large-scale text processing, model training, and insight generation.
            </p>
            <a 
              href="https://github.com/jershomfn/sentiment-analysis"
              target="_blank"
              rel="noreferrer"
            >
              View Code
            </a>
          </div>

          {/* Surveillance Project */}
          <div className="project-card">
            <h3>AI-Based Smart Surveillance System</h3>
            <p>
              Developed a real-time surveillance system using computer vision to detect collisions, fire, and abnormal crowd behavior using YOLOv8 and OpenCV.
            </p>
            <a 
              href="https://github.com/jershomfn/ai-surveillance-system"
              target="_blank"
              rel="noreferrer"
            >
              View Code
            </a>
          </div>

        </div>
      </motion.section>
      {/* Education Section */}
      <section className="education">
        <h2>Education</h2>
        <p>M.Tech in Data Science</p>
        <p>B.E in Computer Science and Engineering</p>
      </section>

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