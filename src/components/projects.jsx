import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <section className="projects">
      <div className="container">
        <div className="row fullscreen align-items-center justify-content-between">
          <div className="col-lg-6 col-md-6 banner-left">
            <h1>Projects</h1>
            <p>
              These are some of the projects I've worked on:
            </p>
            <a href="#" className="primary-btn text-uppercase">discover now</a>
          </div>
          <div className="col-lg-6 col-md-6 banner-right d-flex align-self-end">
            <img className="img-fluid" src="img/smsmap.jpg" alt="" />
          </div>
        </div>
      </div>					
      </section>
    );
  }
}