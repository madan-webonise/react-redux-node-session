import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import resultsJson from './results.json';
import StudentRecord from './studentRecords.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.inputData = this.inputData.bind(this);
  }
  
  inputData(event) {
    event.preventDefault();
    var jsonResult = JSON.parse(resultsJson);
    alert(jsonResult);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      
      <form onSubmit={this.inputData}>
        <button className="readJSON">readJSON</button>
      </form>
      <StudentRecord displaystudentRecord = {this.inputData} />
      </div>
    );
  }
}

export default App;
