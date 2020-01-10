import React, { Component } from 'react'

export default class Moodsic extends Component {
  render() {
    return (
      <section className="Moodsic">
      <div className="container">
        <div className="row fullscreen align-items-center justify-content-between">
          <div className="col-lg-6 col-md-6 banner-left">
            <h2>Moodsic</h2>
            <p>
            Created an Android Application which takes a picture of a person’s face, sends it to Microsoft’s Face API to detect their emotion, and plays music based on that emotion
              
            </p>
            <p>
              Won Lodgic prize at Pyghack
            </p>
            <a href="https://devpost.com/software/moodsic-fmsh5i" className="primary-btn text-uppercase">discover now</a>
          </div>
          <div className="col-lg-6 col-md-6 banner-right d-flex align-self-end">
            <img className="img-fluid" src="img/moodsic.jpg" alt="" /> 
          </div>
         
        </div>
      </div>					
      </section>
    );
  }
}