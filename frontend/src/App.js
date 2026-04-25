import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>Jershom</h2>
        <div>
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <h1>Hi, I'm Jershom</h1>
        <p>Data Science Student | ML | Analytics</p>
      </header>

      <section className="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Machine Learning Project</h3>
          <p>Prediction model using Python and ML algorithms.</p>
        </div>

        <div className="project-card">
          <h3>Data Analysis Dashboard</h3>
          <p>Interactive dashboard built with visualization tools.</p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: your@email.com</p>
      </section>
    </div>
  );
}

export default App;