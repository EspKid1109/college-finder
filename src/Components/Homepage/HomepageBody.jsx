import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function HomepageBody() {
  const navigate = useNavigate();
  const btnHandler = () => {
    navigate("/personalInt");
  };
  return (
    <Box
      sx={{ flexGrow: 1, border: 1, p: 2 }}
      height="75vh"
      width="120vh"
      position="relative"
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={2}
        rowSpacing={48}
      >
        <Grid item xs={6}>
          <Typography variant="h3" align="left">
            Let us help you find the right program for you.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3" align="justify">
            About Us
          </Typography>
          <Typography variant="body1" align="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
            eleifend lorem, nec auctor neque. Duis sollicitudin ac erat id
            vehicula. Integer molestie purus non libero scelerisque lobortis.
            Praesent nisl arcu, ullamcorper vehicula accumsan vitae, bibendum et
            urna. Donec rhoncus lorem sit amet mi iaculis, vel bibendum est
            ultrices.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            style={{
              minWidth: "150px",
              minHeight: "70px",
              borderRadius: 18,
              backgroundColor: "#7f91b8",
            }}
            variant="contained"
            onClick={btnHandler}
          >
            Begin
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
