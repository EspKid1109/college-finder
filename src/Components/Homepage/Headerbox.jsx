import React, { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

class Headerbox extends Component {
  render() {
    return (
      <div>
        <AppBar style={{ background: "#2E3B55" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Box sx={{ p: 2 }}>
              <Typography variant="h2" align="justify">
                College Finder: Exotic.
              </Typography>
            </Box>
          </Grid>
        </AppBar>
      </div>
    );
  }
}

export default Headerbox;
