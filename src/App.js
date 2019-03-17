import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
   quotes: [
    {
    author: 'Pickle Juice Johnson',
    quote: 'Dont pee in the pool fam'
    },
    {
    author: 'Pickle Juice Peggy',
    quote: 'Whenever you need me Ill be there'
    },
    {
    author: 'Pickle Juice Betty',
    quote: 'I feel like Rick James'
    },
    {
    author: 'Pickle Juice Todd',
    quote: 'Life is not in chronalogical order meaning you need to move around a bit and explore'
    }],
    index:0
  }

  randomQuote = ()=>{
   var number = Math.floor(Math.random() * (this.state.quotes.length))
   this.setState({
     index: number
   })
    
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.quotes[this.state.index].quote }</h1>
        <button type="submit" onClick={this.randomQuote}>Generate Random Quote</button>
      </div>
    );
  }
}

export default App;
