import React from "react";
import { Box } from "@mui/system";
import { FormControl, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Checkbox, FormGroup, Select, FormControlLabel } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Button } from "@mui/material";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
export default function InstitutionTypeBody() {
  //NOTE: INPUTTING DATA FOR radio buttons is broken
  const pushIntoStorage = (name) => {
    if (name === parseInt(name, 10)) {
      switch (name) {
        case 10:
          name = "Gainesville";
          break;
        case 11:
          name = "Orlando";
          break;
        case 12:
          name = "Coral Gables";
          break;
        case 13:
          name = "Tallhassee";
          break;
        case 14:
          name = "Fort Myers";
          break;
        case 15:
          name = "Tampa";
          break;
        case 16:
          name = "Boca Raton";
          break;
        case 17:
          name = "Melbourne";
          break;
        case 18:
          name = "Jacksonville";
          break;
        case 19:
          name = "Miami";
          break;
        // <MenuItem value={10}>Gainesville</MenuItem>
        //   <MenuItem value={11}>Orlando</MenuItem>
        //   <MenuItem value={12}>Coral Gables</MenuItem>
        //   <MenuItem value={13}>Tallahassee</MenuItem>
        //   <MenuItem value={14}>Fort Myers</MenuItem>
        //   <MenuItem value={15}>Tampa</MenuItem>
        //   <MenuItem value={16}>Boca Raton</MenuItem>
        //   <MenuItem value={17}>Melbourne</MenuItem>
        //   <MenuItem value={18}>Jacksonville</MenuItem>
        //   <MenuItem value={19}>Miami</MenuItem>
      }
    }
    localStorage.setItem(name, !name.value);
  };
  const [value, setValue] = React.useState("yes");

  const handleChange = (event) => {
    setValue(event.target.value);
    pushIntoStorage(event.target.name);
  };

  const [city, setCity] = React.useState("");

  const handleChange2 = (event) => {
    setCity(event.target.value);
    pushIntoStorage(event.target.value);
  };

  const [state2, setState2] = React.useState("public");

  const handleChange3 = (event) => {
    setState2(event.target.value);
    pushIntoStorage(event.target.name);
  };

  const navigate = useNavigate();
  const btnHandler = () => {
    navigate("/submit");
    console.log(JSON.stringify(localStorage)); //user info is stored here
    localStorage.clear();
  };

  return (
    <Box
      sx={{ flexGrow: 1, p: 2, border: 1 }}
      height="75vh"
      width="120vh"
      position="relative"
    >
      <FormControl
        sx={{
          left: "-30%",
        }}
        component="fieldset"
        variant="standard"
      >
        <Grid item xs={6}>
          <Typography
            sx={{ mb: 2, fontWeight: "bold" }}
            variant="h6"
            align="left"
          >
            Do you value having an online program?
          </Typography>

          <FormGroup>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="online-preferences"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormGroup>
        </Grid>
        <FormControl
          sx={{
            left: "158%",
            top: -115,
            width: 300,
          }}
        >
          <Grid sx={{ left: "150%", top: -50, width: 500, mt: -4, mb: 2 }}>
            <Typography sx={{ fontWeight: "bold" }} variant="h6" align="left">
              Where are you interested in living?
            </Typography>
          </Grid>
          <InputLabel
            style={{ color: "#FFFFFF" }}
            sx={{ mt: 2 }}
            id="city-select-question-label"
          >
            Select city
          </InputLabel>
          <Select
            labelId="city-select-question-label"
            id="city-select-question"
            value={city}
            label="Select City..."
            style={{ color: "#FFFFFF" }}
            onChange={handleChange2}
          >
            <MenuItem value={10}>Gainesville</MenuItem>
            <MenuItem value={11}>Orlando</MenuItem>
            <MenuItem value={12}>Coral Gables</MenuItem>
            <MenuItem value={13}>Tallahassee</MenuItem>
            <MenuItem value={14}>Fort Myers</MenuItem>
            <MenuItem value={15}>Tampa</MenuItem>
            <MenuItem value={16}>Boca Raton</MenuItem>
            <MenuItem value={17}>Melbourne</MenuItem>
            <MenuItem value={18}>Jacksonville</MenuItem>
            <MenuItem value={19}>Miami</MenuItem>
          </Select>
          <FormControl
            sx={{
              m: 2,
              left: "-210%",
              top: 140,
            }}
            component="fieldset"
            variant="standard"
          >
            <Grid item xs={6}>
              <Typography
                sx={{ mb: 2, fontWeight: "bold" }}
                variant="h6"
                align="left"
              >
                Do you have a preference for public or private programs?
              </Typography>
            </Grid>
            <FormGroup>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="public-private"
                value={state2}
                onChange={handleChange3}
              >
                <FormControlLabel
                  value="public"
                  control={<Radio />}
                  label="Public"
                />
                <FormControlLabel
                  value="private"
                  control={<Radio />}
                  label="Private"
                />
                <FormControlLabel
                  value="doesn't matter"
                  control={<Radio />}
                  label="Doesn't Matter"
                />
              </RadioGroup>
              <Grid item xs={12} sx={{ ml: 100, mt: 15, mb:6 }}>
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
            </FormGroup>
          </FormControl>
        </FormControl>
      </FormControl>
    </Box>
  );
}
