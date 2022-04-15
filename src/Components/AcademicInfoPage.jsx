import React, { Component } from "react";
import SideTest from "./Homepage/SideTest";
import Headerbox from "./Homepage/Headerbox";
import AcademicInfoBody from "./AcademicInfoBody";

class AcademicInfoPage extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <SideTest />
            <Headerbox />
            <AcademicInfoBody />
        </header>
    </div>
      
    );
  }
}

export default AcademicInfoPage;