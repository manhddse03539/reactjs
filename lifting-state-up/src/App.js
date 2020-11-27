import { Component } from 'react';
import './App.css';
import React from 'react';
import Lifting from './components/Lifting';


class App extends Component {
  constructor() {
    super()
    this.state = {
       number : 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState({
      number : this.state.number + 1
    });
  }
  decrement() {
    if (this.state.number > 0) {
      this.setState({
        number : this.state.number - 1
      });
    }
  }
  
  render(){
    return (
      <div className="App">
        <Lifting 
          number = {this.state.number}
          increment = {() => this.increment()}
          decrement = {() => this.decrement()}
        />        
      </div>
    );
  }
}

export default App;
