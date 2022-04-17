import React, { Component } from "react";
import Sidebox from "./Homepage/Sidebox";
import Headerbox from "./Homepage/Headerbox";
import SubmitBody from "./SubmitBody";
class SubmitPage extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Sidebox />
          <Headerbox />
          <SubmitBody />
        </header>
      </div>
    );
  }
}

export default SubmitPage;
