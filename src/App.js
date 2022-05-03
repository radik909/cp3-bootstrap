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
        <div className="search-filter">
          <button type="button" className="btn icon-button">
            <span className="material-icons">settings</span>
          </button>
          <div className="input-group search-bar">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <span className="material-icons">search</span>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn" type="button">
                Search
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="toolbar">
          <p className="heading">Viewing 20 of 200 Results</p>
          <div>
            <button className="btn btn-light" type="button">
              <span className="center-flex">
                <span className="material-icons btn-icon">add_circle</span>
                <span className="ml-1">Create</span>
              </span>
            </button>
            <button className="ml-2 btn btn-light" type="button">
              <span className="center-flex">
                <span className="material-icons btn-icon">get_app</span>
                <span className="ml-1">Export</span>
              </span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
