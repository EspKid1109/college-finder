import React, { Component } from "react";
import SideTest from "./Homepage/SideTest";
import Headerbox from "./Homepage/Headerbox";
import SearchBody from "./SearchBody";

class SearchPage extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SideTest />
          <Headerbox />
          <SearchBody />
        </header>
      </div> 
    );
  }
}

export default SearchPage;