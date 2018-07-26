import React, { Component } from 'react';

import './App.css';


const Timer = ({startWith}) => {
  return (
     <div>
        {startWith}
      </div>
  );
}

class App extends Component { 

  constructor(props){
    super(props);

    this.state = { currentValue : 150};

    setInterval(() => {this.setState({currentValue : this.state.currentValue - 1});},1000);


  }

  resetTimer = () => {this.setState({currentValue : 150});}

  render() {
    console.log('this is App component');
    return (
      <div className="App">
       <Timer startWith={this.state.currentValue}/>
       <button onClick={this.resetTimer}>Reset Value</button>
      </div>
    );
  }
}

export default App;
