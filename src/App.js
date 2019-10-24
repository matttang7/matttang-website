import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import Projects from './components/projects'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div id="colorlib-page">
        <div id="container-wrap">
				<div id="colorlib-main">
					<Home></Home>
          <Projects></Projects>
          	</div>
      	</div>
      </div>
  );
}

export default App;
