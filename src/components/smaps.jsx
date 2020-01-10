import React, { Component } from 'react'

export default class Smaps extends Component {
  render() {
    return (
      <section className="smaps">
      <div className="container">
        <div className="row fullscreen align-items-center justify-content-between">
          <div className="col-lg-6 col-md-6 banner-left">
            <h2>Smaps</h2>
            <p>
              Android app that gets directions without needing wifi or data
              
            </p>
            <p>
            Uses Twilio to send the search, which calls a google cloud function and uses the google maps API to get the directions. Then, it sends the directions back to the phone and displays them.
            </p>
            <p>
              Won best transportation hack at MHacks
            </p>
            <a href="https://devpost.com/software/smaps" className="primary-btn text-uppercase">discover now</a>
          </div>
          <div className="col-lg-6 col-md-6 banner-right d-flex align-self-end">
            <img className="img-fluid" src="img/smsmap.jpg" alt="" /> 
            <img className="img-fluid" src="img/smaps2.jpg" alt="" />
          </div>
         
        </div>
      </div>					
      </section>
    );
  }
}