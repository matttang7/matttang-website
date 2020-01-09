import React, { Component } from 'react'
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
export default class Navbar extends Component {

  render() {
    return (

      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand mr-0 mr-md-2" href="/cs357/fa2019/">
          <img src="img/megumin.png" alt="UIUC Logo" width={24} height={32} className="d-inline-block align-top mr-2" />
          Matthew Tang
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="img/nsf.jpg">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cs357/fa2019/exams/">Links</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cs357/fa2019/references/">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}