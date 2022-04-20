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
    rank();
    localStorage.clear();
    };

    class user{
        constructor(major,city) {
            this.major = major;
            this.city = city;
        }
    }

    function rank() {
        let rankList = [];
        let userDataList = [];
        const collegeData = require("./collegedata.json");
        let userData = JSON.stringify(localStorage);
        console.log(userData);
        var userArr = userData.split(',');

        //formatting user info from storage
        for (let i = 0; i < userArr.length; i++) {
            let temp = "";
            let isColon = 0;
            for (let j = 0; j < userArr[i].length; j++) {
                if (userArr[i].at(j) === ':' && !isColon) {
                    if (!isColon) {
                        isColon = 1;
                    } else {
                        isColon = 0;
                    }
                }
                //getting rid of uneeded characters
                if (!(userArr[i].at(j) === '"') && !isColon && !(userArr[i].at(j) === '{') && !(userArr[i].at(j) === '}') && !(userArr[i].at(j) === '\'')){
                    temp+=userArr[i].at(j);
                }
            }
            userDataList[i] = temp;
            temp = "";
        }
        console.log(userDataList);

        //looping through all current colleges in collegedata.json
        for (let i = 0; i < 14; i++) {
            let singleRank = 0;
            let location = "";
            location += collegeData[i].L;
            //formatting location
            location=location.substring(0, location.length - 4);
            //formatting majors
            var majorsArr = collegeData[i].Majors.split(',');
            for (let j = 0; j < userDataList.length; j++) {
                //check if location matches
                if (userDataList[j] === location) {
                    singleRank++;
                }
                //checking for major/subject matches from top 3 majors
                for (let k = 0; k < 3; k++) {
                    let majorStr = "";
                    majorStr += majorsArr[k];
                    switch (majorStr) {
                        case "Engineering":
                            if (userDataList[j] === "Engineering" || userDataList[j] === "math" || userDataList[j] === "chemistry") {
                                singleRank++;
                            }
                            break;
                        case "BMM":
                            if (userDataList[j] === "Business") {
                                singleRank++;
                            }
                            break;
                        case "Bio":
                            if (userDataList[j] === "biology") {
                                singleRank++;
                            }
                            break;
                        case "Health":
                            if (userDataList[j] === "biology" || userDataList[j] === "chemistry") {
                                singleRank++;
                            }
                            break;
                        case "Psychology":
                            if (userDataList[j] === "biology") {
                                singleRank++;
                            }
                            break;
                        case "Finance":
                            if (userDataList[j] === "Business" || userDataList[j] === "math") {
                                singleRank++;
                            }
                            break;
                        case "Communications":
                            if (userDataList[j] === "Journalism") {
                                singleRank++;
                            }
                            break;
                        case "Computer Science":
                            if (userDataList[j] === "Engineering" || userDataList[j] === "math") {
                                singleRank++;
                            }
                            break;
                    }
                }
            }
            rankList[i] = singleRank;
        }
        console.log(rankList);
        let sortedColleges = [];
        let max = -1;
        let index = -1;
        for (let i = 0; i < rankList.length; i++) {
            for (let j = 0; j < rankList.length; j++) {
                if (rankList[j] >= max) {
                    max = rankList[j];
                    index = j;
                }
            }
            sortedColleges[i] = index;
            rankList[index] = -2;
            max = -1;
        }
        console.log(sortedColleges);
        return sortedColleges;
    }

    
    
  return (
    <Box
      sx={{ flexGrow: 1, p: 2 }}
      height="75vh"
      width="120vh"
      position="relative"
    >
      <FormControl
        sx={{
          left: "-26%",
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
              width:500
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
              <Grid item xs={12} sx={{ ml: 100, mt: 7, mb:10 }}>
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
