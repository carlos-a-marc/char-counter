import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      characters: 0,
      text: []
    };
  }

  counter() {
    let text = document.getElementById('text').value;
    this.setState({
      characters: text.length,
      text
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Character Counter</h1>
          <h3>Put your text in text area</h3>
          <textarea className="text-area" id="text" onKeyUp={() => this.counter()}></textarea>
          <p className="number-char">Characters: {this.state.characters}</p>
        </div>
      </div>
    );
  }
}

export default App;
