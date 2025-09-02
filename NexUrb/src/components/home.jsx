import "../css/home.css";

export default function HomeComponent() {
  return (
    <div>
      {/* Main container */}
      <div className="main">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="back-video"
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <source src="/img/2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="icon">
            <h2 className="logo">NexUrb</h2>
          </div>

          <div className="menu">
            <ul>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Content Section */}
        <main className="page-container">
          <div className="card">
            {/* Card 1 */}
            <section className="card-item">
              <div className="card-text">
                <h3 className="card-title">Project Management</h3>
                <p className="card-description">
                  All the complete and incomplete projects of different
                  departments are shown here
                </p>
              </div>
              <img
                src="/img/1.jpg"
                alt="Project"
                className="card-image"
                loading="lazy"
                style={{ maxWidth: "100%" }}
              />
            </section>

            {/* Card 2 */}
            <section className="card-item">
              <div className="card-text">
                <h3 className="card-title">Inventory Management</h3>
                <p className="card-description">
                  Name of the project and project coordinator is showed here in
                  queue
                </p>
              </div>
              <img
                src="/img/3.jpg"
                alt="Inventory"
                className="card-image"
                loading="lazy"
                style={{ maxWidth: "100%" }}
              />
            </section>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer id="homeFooter">
        <p>&copy; NexUrb</p>
      </footer>
    </div>
  );
}
