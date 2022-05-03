import { DropdownButton, Dropdown } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <header className="header">
        <img className="logo" src="/logo.png" alt="logo" />
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
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th scope="col">Track Title</th>
                <th scope="col">Artist</th>
                <th scope="col">ISRC</th>
                <th scope="col">Label</th>
                <th scope="col">Policy</th>
                <th scope="col">Leak Date</th>
                <th scope="col">Release Date</th>
                <th className="text-center" scope="col">
                  Notes
                </th>
                <th className="text-center" scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <tr key={item}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Some Track title {item}</td>
                  <td>Some Artist</td>
                  <td>123456789</td>
                  <td>Universal Musuc</td>
                  <td>Block</td>
                  <td>01/01/2022</td>
                  <td>01/01/2022</td>
                  <td className="text-center">
                    <span className="material-icons pointer">
                      question_answer
                    </span>
                  </td>
                  <td className="text-center">
                    <span className="material-icons pointer">edit</span>
                    <span className="material-icons pointer ml-3">archive</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
