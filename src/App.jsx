import { NavLink, Outlet } from "react-router-dom"; // Import Link and Outlet for routing

const App = () => {
  return (
    <div className="container">
      <header className="main-header">
        <nav className="navbar">
          {/* Left side: Title */}
          <div className="navbar-left">
            <h1>Ruari Hodgin: Design Engineer</h1>
          </div>

          {/* Right side: Links */}
          <div className="navbar-right">
            <ul className="nav-links">
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* This will render the child route components */}
      <Outlet />
    </div>
  );
};

export default App;