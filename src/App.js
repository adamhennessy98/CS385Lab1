import React, { Component } from "react";

import {companies} from "./companies";

class App extends Component {
  render() {
    return (
      <div className="App">
        {companies.filter(employees(400)).map((c) => (
          <div key = {c.cid}>
            <b>CID:</b> {c.cid} <b>Company:</b> {c.company} <b>Employees:</b> {c.employees} <b>Materials:</b> {c.material};  
            </div>
        ))}
        
      </div>
    );
  }
}
export default App;