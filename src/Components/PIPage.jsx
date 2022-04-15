import React, { Component } from "react";
import SideTest from "./Homepage/SideTest";
import Headerbox from "./Homepage/Headerbox";
import PIBody from "./PIBody";

class PIPage extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SideTest />
          <Headerbox />
          <PIBody />
        </header>
      </div> 
    );
  }
}

export default PIPage;