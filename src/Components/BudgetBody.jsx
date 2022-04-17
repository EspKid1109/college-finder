import React from "react";
import { Box } from "@mui/system";
import { FormControl, Input, InputAdornment, Typography } from "@mui/material";
import { FormGroup, FormControlLabel } from "@mui/material";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import { Slider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

// ***********************************  BUDGET CONSTANTS  ***********************************
function valuetext(value){
  return '${value} or less'
}
const budget_min = 0;
const budget_max = 90000;

export default function BudgetBody() {
// ********************************  BUDGET VALUES/CONSTANTS  **********************************
  const [value, setValue] = React.useState(10000);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    var value =  parseInt(event.target.value, 10);
            if(value > budget_max) value = budget_max;
            if(value < budget_min) value = budget_min;
            setValue(value);
  };
   // ****************************  FL RESIDENT VALUES/CONSTANTS ********************************
   const [value2, setValue2] = React.useState("yes");
   const handleChange = (event) => {
     setValue2(event.target.value);
 
   };

  // ***********************************  BUTTON CTRL  *****************************************
  const navigate = useNavigate();
  const btnHandler = () => {
    navigate("/institutionType");
  };

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
          left: "-16.5%",
          top: -255,
          width: 840,
          height: 100
        }}
      >
      <FormControl
        sx={{
          m: 32,
          left: "-21.5%",
          top: -255,
          width: 415
        }}
      >
        <Grid item xs={6}>
          <Typography
            sx={{ mb: 6, fontWeight: "bold", width: 450 }}
            variant="h6"
            align="left"
            
          >
          What is your preferred cost of attendance?
          </Typography>
        </Grid>
        <Slider
          value={typeof value === 'number' ? value : 0}
          defaultValue={10000}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={1000}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          min={budget_min}
          max={budget_max}
        />
      </FormControl>
      <FormControl
        sx={{
          m: 32,
          left: "30%",
          top: -800,
          width: 80
        }}
      >
      <Input
          value={value}
          startAdornment={<InputAdornment position="start" >$</InputAdornment>}
          onChange={handleInputChange}
          sx={{input: {color:'white'} }}
          inputProps={{
            step: 1000,
            min: budget_min,
            max: budget_max,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
        />
      </FormControl>
      <FormControl
        sx={{
          m: 32,
          left: "40.5%",
          top: -1340,
        }}
      >
        <Grid item xs={3}>
          <Typography
            sx={{ mb: 2 }}
            variant="body1"
            align="left"
          >
            or less
          </Typography>
        </Grid>
      </FormControl>


      <FormControl
        sx={{
          m: 32,
          left: "-21.5%",
          top: -1720,
        }}
      >
        <Grid item xs={6}>
          <Typography
            sx={{ mb: 6, fontWeight: "bold" }}
            variant="h6"
            align="left"
          >
          Are you a Florida resident?
          </Typography>
        </Grid>
      </FormControl>
      <FormControl
        sx={{
          m: 32,
          left: "-21.5%",
          top: -2260,
        }}
      >
        <FormGroup>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="florida-resident"
              value={value2}
              onChange={handleChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormGroup>
      </FormControl>
      <FormControl
        sx={{
          m: 32,
          left: "52.5%",
          top: -2553,
        }}>
      <Grid item xs={12} sx={{ ml: 23, mt: -10}}>
        <Button
          onClick={btnHandler}
          style={{
            minWidth: "150px",
            minHeight: "70px",
            borderRadius: 18,
            backgroundColor: "#7f91b8",
          }}
          variant="contained"
        >
          NEXT
        </Button>
      </Grid>
      </FormControl>

      </FormControl>

    </Box>

  );
}