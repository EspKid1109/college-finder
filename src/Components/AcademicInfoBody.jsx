import React from "react";
import { Box } from "@mui/system";
import { FormControl, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function AcademicInfoBody() {
  return (
    <Box
      sx={{ flexGrow: 1, p: 2 }}
      height="75vh"
      width="140vh"
      position="relative"
    >
      <FormControl
        sx={{
          m: 32,
          left: "-31%",
          top: -255,
        }}
      >
        <Grid item xs={6}>
          <Typography
            sx={{ mb: 2, fontWeight: "bold" }}
            variant="h6"
            align="left"
          >
            What is your GPA?
          </Typography>
        </Grid>
      </FormControl>
    </Box>
  );
}
