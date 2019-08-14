import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      citys: ['Chicago', 'Los Angeles', 'New York', 'Houston', 'Phoenix']
    };
  }

  render() {
    let statesToDisplay = this.state.citys.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    })

    return <div className="App">{statesToDisplay}</div>
  }
}

export default App;
