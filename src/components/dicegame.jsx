import React, { Component } from 'react'

export default class Dicegame extends Component {
  render() {
    return (
      <section className="dicegame">
      <div className="container">
        <div className="row fullscreen align-items-center justify-content-between">
          <div className="col-lg-6 col-md-6 banner-left">
            <h2>Dice Game</h2>
            <p>
            Using Unity and C#, created a 4 player board game where players move based on the card they roll on the die, and battle with monsters on the square they land on. If they win, the square becomes theirs and the game ends when a player reaches the point threshold
            </p>
            <a href="https://github.com/matttang7/Dice-Game" className="primary-btn text-uppercase">discover now</a>
          </div>
          <div className="col-lg-6 col-md-6 banner-right d-flex align-self-end">
            <img className="img-fluid" src="img/dicegame.png" alt="" /> 
          </div>
         
        </div>
      </div>					
      </section>
    );
  }
}