import React, { Component } from "react";
import Sidebox from "./Sidebox";
import Headerbox from "./Headerbox";
import HomepageBody from "./HomepageBody";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Sidebox />
        <Headerbox />
        <HomepageBody />
      </div>
    );
  }
}

export default Homepage;
