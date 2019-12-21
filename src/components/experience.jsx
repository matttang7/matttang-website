import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
        <section className="banner-area">
        <div className="container">
          <div className="row fullscreen align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6 banner-left">
              <h1>Experience</h1>
              <p>
                National Science Foundation Research Experience for Undergraduates
              </p>
              <a href="https://arxiv.org/abs/1910.05786" className="primary-btn text-uppercase">discover now</a>
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