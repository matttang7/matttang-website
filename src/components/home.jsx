import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <section className="banner-area">
        <div className="container">
          <div className="row fullscreen align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6 banner-left">
              <h1>Matthew Tang</h1>
              <p>
                I'm a student studying Computer Science and Statistics at the University of Illinois at Urbana-Champaign.
                This website contains some of the projects I've worked on.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 banner-right d-flex align-self-end">
              <img className="img-fluid" src="img/megumin.png" alt="" />
            </div>
          </div>
        </div>					
      </section>
    );
  }
}