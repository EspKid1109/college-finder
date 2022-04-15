import React, { Component } from "react";
import Sidebox from "./Homepage/Sidebox";
import Headerbox from "./Homepage/Headerbox";
import SearchBody from "./SearchBody";

class SearchPage extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Sidebox />
          <Headerbox />
          <SearchBody />
        </header>
      </div> 
    );
  }
}

export default SearchPage;