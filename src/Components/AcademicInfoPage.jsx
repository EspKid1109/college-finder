import React, { Component } from "react";
import Sidebox from "./Homepage/Sidebox";
import Headerbox from "./Homepage/Headerbox";
import AcademicInfoBody from "./AcademicInfoBody";

class AcademicInfoPage extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Sidebox />
            <Headerbox />
            <AcademicInfoBody />
        </header>
    </div>
      
    );
  }
}

export default AcademicInfoPage;