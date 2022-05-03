export default function App() {
  return (
    <div>
      <header className="header">
        <img
          style={{
            position: "absolute",
            height: "100px",
            width: "200px",
            top: "-15px",
            left: "18px",
          }}
          src="/logo.png"
          alt="logo"
        />
        <nav className="navbar navbar-expand-sm">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="material-icons">dark_mode</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="material-icons">account_circle</span>
                &nbsp;Welcome, John Doe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Log Out
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
