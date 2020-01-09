import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import Projects from './components/projects'
import Navbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Experience from './components/experience';

function App() {
  return (
    <div id="colorlib-page">
        <div id="container-wrap">
				<div id="colorlib-main">
          <Navbar></Navbar>
					<Home></Home>
          <Experience 
          id = "experience"
          ></Experience>
          <Projects></Projects>
          	</div>
      	</div>
      </div>
  );
}

export default App;
