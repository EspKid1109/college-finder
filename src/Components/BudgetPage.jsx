import React, { Component } from "react";
import Sidebox from "./Homepage/Sidebox";
import Headerbox from "./Homepage/Headerbox";
import BudgetBody from "./BudgetBody";

class BudgetPage extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Sidebox />
            <Headerbox />
            <BudgetBody />
        </header>
    </div>
      
    );
  }
}

export default BudgetPage;