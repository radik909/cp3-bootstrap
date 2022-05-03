import { DropdownButton, Dropdown } from "react-bootstrap";

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
          <div className="page-count">
            <p className="heading">Viewing&nbsp;</p>
            <DropdownButton
              variant="warning"
              size="sm"
              title="10"
              className="dropdown-views-count"
            >
              <Dropdown.Item>10</Dropdown.Item>
              <Dropdown.Item>25</Dropdown.Item>
              <Dropdown.Item>50</Dropdown.Item>
            </DropdownButton>
            <p className="heading">&nbsp;of 200 Results</p>
          </div>
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
        <table className="table table-hover">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Mark</td>
              <td>Otto</td>
              <td>mark_ott</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>fatty</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Larry the Bird</td>
              <td>Thoron</td>
              <td>larry_bird</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
