import React, { Component } from "react";
import Headerbox from "./Homepage/Headerbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import SideBox from "./Homepage/Sidebox";

class SubmitBody extends Component {
  state = {};

  render() {
    return (
      <Box
        sx={{ flexGrow: 1, p: 2 }}
        height="75vh"
        width="120vh"
        position="relative"
      >
        <h1>SUBMIT PAGE</h1>
      </Box>
    );
  }
}

export default SubmitBody;
