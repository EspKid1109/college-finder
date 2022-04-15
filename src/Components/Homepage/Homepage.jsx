import React, { Component } from "react";
import Sidebox from "./Sidebox";
import SideTest from "./SideTest";
import Headerbox from "./Headerbox";
import HomepageBody from "./HomepageBody";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Headerbox />
        <div>
        <HomepageBody />
        <SideTest /> 
        </div>
        
      </div>
    );
  }
}

export default Homepage;
