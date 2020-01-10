import React, { Component } from 'react'

export default class Datavis extends Component {
  render() {
    return (
      <section className="smaps">
      <div className="container">
        <div className="row fullscreen align-items-center justify-content-between">
          <div className="col-lg-6 col-md-6 banner-left">
            <h2>Smaps</h2>
            <p>
            Data visualization created with Python for cleaning data and d3.js for visualization to show the change in enrollment of international students at the University of Illinois at Urbana-Champaign from 1990 to 2018. 
            Percentages are relative to total international student enrollment. Blue shades represent more male students than female students, vice versa. The area of the circle is proportional to the total enrollment.
            </p>
            <a href="https://devpost.com/software/smaps" className="primary-btn text-uppercase">discover now</a>
          </div>
          <div className="col-lg-6 col-md-6 banner-right d-flex align-self-end">
            <img className="img-fluid" src="img/datavisualization.png" alt="" /> 
          </div>
         
        </div>
      </div>					
      </section>
    );
  }
}