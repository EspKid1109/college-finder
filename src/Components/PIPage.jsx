import React, { Component } from "react";
import Sidebox from "./Homepage/Sidebox";
import Headerbox from "./Homepage/Headerbox";
import PIBody from "./PIBody";

class PIPage extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Sidebox />
          <Headerbox />
          <PIBody />
        </header>
      </div> 
    );
  }
}

export default PIPage;