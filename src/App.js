import {
  DropdownButton,
  Dropdown,
  Modal,
  Form,
  ListGroup,
} from "react-bootstrap";
import Checkbox from "./Checkbox";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import Select from "react-select";
import DatePicker from "react-date-picker";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function App() {
  const [modalShow, setModalShow] = useState(false);
  const [filterModalShow, setFilterModalShow] = useState(false);

  const handlePageChange = (e) => {
    console.log(e.selected);
  };

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
                &nbsp;Welcome, Raman Dineshkumar
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
          <button
            type="button"
            className="btn icon-button"
            onClick={() => setFilterModalShow(true)}
          >
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
          <ReactPaginate
            pageCount={10}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
            previousLabel={"<<"}
            nextLabel=">>"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
          />
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
                <th className="t-checkbox">
                  <Checkbox />
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
                  <td className="t-checkbox">
                    <Checkbox />
                  </td>
                  <td>Some Track title {item}</td>
                  <td>Some Artist</td>
                  <td>123456789</td>
                  <td>Universal Musuc</td>
                  <td>Block</td>
                  <td>01/01/2022</td>
                  <td>01/01/2022</td>
                  <td className="text-center">
                    <span
                      className="material-icons pointer"
                      onClick={() => setModalShow(true)}
                    >
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
        <Modal
          show={modalShow}
          animation={false}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className="notes-modal">
            <span
              className="material-icons x-close"
              onClick={() => setModalShow(false)}
            >
              cancel
            </span>
            <h4 className="notes-header">Notes for Some Track Title 1</h4>
            <div className="notes-list">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <div className="row">
                    <div className="col-md-4">
                      Raman Dineshkumar - 03/22/2017
                    </div>
                    <div className="col-md-8">
                      Some initial note left on the item from RAMA.
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="row">
                    <div className="col-md-4">
                      Raman Dineshkumar - 03/22/2017
                    </div>
                    <div className="col-md-8">
                      Another note added at a later date that’s intentionally
                      longer to display how a longer message might appear.
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="row">
                    <div className="col-md-4">
                      Raman Dineshkumar - 03/22/2017
                    </div>
                    <div className="col-md-8">Another note left later on.</div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="row">
                    <div className="col-md-4">
                      Raman Dineshkumar - 03/22/2017
                    </div>
                    <div className="col-md-8">Another note left later on.</div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
            <Form.Group>
              <Form.Control
                className="light-background"
                as="textarea"
                placeholder="Create a New Note..."
                rows={3}
              />
            </Form.Group>
            <div className="notes-modal-footer">
              <button className="btn btn-main btn-36">Submit</button>
              <button
                onClick={() => setModalShow(false)}
                className="ml-3 btn btn-light btn-36"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
        <Modal
          show={filterModalShow}
          animation={false}
          onHide={() => setFilterModalShow(false)}
          size="lg"
          centered
        >
          <div className="notes-modal">
            <span
              className="material-icons x-close"
              onClick={() => setFilterModalShow(false)}
            >
              cancel
            </span>
            <h4 className="notes-header">Search Filters</h4>
            <form autoComplete="off" noValidate>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label text-right">
                  Search Within
                </label>
                <div className="col-sm-10">
                  <div className="row h-100">
                    <div className="col-md-2 d-flex align-items-center">
                      <Checkbox label="All" />
                    </div>
                    <div className="col-md-2 d-flex align-items-center">
                      <Checkbox label="Title" />
                    </div>
                    <div className="col-md-2 d-flex align-items-center">
                      <Checkbox label="Artist" />
                    </div>
                    <div className="col-md-2 d-flex align-items-center">
                      <Checkbox label="ISRC" />
                    </div>
                    <div className="col-md-2 d-flex align-items-center">
                      <Checkbox label="Notes" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label text-right">
                  Label
                </label>
                <div className="col-sm-10">
                  <Select
                    isMulti
                    name="colors"
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label text-right">
                  Policy
                </label>
                <div className="col-sm-10">
                  <Select
                    name="colors"
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label text-right">
                  Leak Date
                </label>
                <div className="col-sm-10">
                  <div className="row h-100">
                    <div className="col-md-4 d-flex align-items-center">
                      <DatePicker onChange={console.log} />
                    </div>
                    <div className="col-md-1 d-flex align-items-center">To</div>
                    <div className="col-md-4 d-flex align-items-center">
                      <DatePicker onChange={console.log} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label text-right">
                  Release Date
                </label>
                <div className="col-sm-10">
                  <div className="row h-100">
                    <div className="col-md-4 d-flex align-items-center">
                      <DatePicker onChange={console.log} />
                    </div>
                    <div className="col-md-1 d-flex align-items-center">To</div>
                    <div className="col-md-4 d-flex align-items-center">
                      <DatePicker onChange={console.log} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="notes-modal-footer">
                <button type="submit" className="btn btn-main btn-36">
                  Apply
                </button>
                <button
                  type="button"
                  onClick={() => setFilterModalShow(false)}
                  className="ml-3 btn btn-light btn-36"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </main>
    </div>
  );
}
