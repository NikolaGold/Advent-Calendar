import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AdventCalendar from './AdventCalendar/AdventCalendar.js';

class App extends Component {
  render() {

    return (
      <div className="App">
      	<AdventCalendar />
      </div>
    );
  }
}

export default App;
