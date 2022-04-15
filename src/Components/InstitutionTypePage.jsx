import React, { Component } from "react";
import SideTest from "./Homepage/SideTest";
import Headerbox from "./Homepage/Headerbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import SideBox from "./Homepage/Sidebox";
import InstitutionTypeBody from "./InstitutionTypeBody";
class InstitutionTypePage extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SideTest />
          <Headerbox />
          <InstitutionTypeBody />
        </header>
      </div>
    );
  }
}

export default InstitutionTypePage;
