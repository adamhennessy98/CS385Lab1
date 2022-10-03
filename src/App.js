import React, { Component } from "react";
const alpha = 20;
const beta = 100;
const gamma = 1000;
const x = "CS385";
const y = "App Development";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          {alpha} + {beta} + {gamma} = {alpha + beta + gamma}
        </p>
        <p>
          {alpha} + {beta} + {gamma} = {alpha * beta * gamma}
        </p>
        <p>
          {alpha} + {beta} + {gamma} = {alpha * 10 + beta * 10 + gamma * 10}
        </p>
        <p>{x}</p>
        <p>{y}</p>
        <p>{x.toUpperCase()}</p>
        <p>{y.toLocaleLowerCase()}</p>
      </div>
    );
  }
}
export default App;
