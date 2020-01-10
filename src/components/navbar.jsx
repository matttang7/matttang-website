import React, { Component } from 'react'
export default class Navbar extends Component {

  render() {
    return (

      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand mr-0 mr-md-2" href="#">
          <img src="img/megumin.png" alt="UIUC Logo" width={24} height={32} className="d-inline-block align-top mr-2" />
          Matthew Tang
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="Matthew_Tang_Resume.pdf">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/matttang7">Github</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}