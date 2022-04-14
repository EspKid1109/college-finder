import React, { useEffect } from "react";
import { Box } from "@mui/system";
import { FormControl, Typography } from "@mui/material";
import { Checkbox, FormGroup, Select, FormControlLabel } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Button } from "@mui/material";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
export default function PIBody() {
  // ***********************************  QUESTION 1  ***********************************
  const [state, setState] = React.useState({
    math: false,
    english: false,
    art: false,
    biology: false,
    chemistry: false,
    history: false,
    music: false,
    drama: false,
  });

  const { math, english, art, biology, chemistry, history, music, drama } =
    state;

  const pushIntoStorage = (name) => {
    if (name === parseInt(name, 10)) {
      switch (name) {
        case 10:
          name = "Engineering";
          break;
        case 11:
          name = "Education";
          break;
        case 12:
          name = "Business";
          break;
        case 13:
          name = "Arts";
          break;
        case 14:
          name = "Architecture";
          break;
        case 15:
          name = "Journalism";
          break;
      }
    }
    localStorage.setItem(name, !name.value);
  };
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    pushIntoStorage(event.target.name);
  };
  // ***********************************  QUESTION 2  ***********************************
  const [career, setCareer] = React.useState("");

  const handleChange2 = (event) => {
    setCareer(event.target.value);
    pushIntoStorage(event.target.value);
  };

  // ***********************************  QUESTION 3  ***********************************
  const [state2, setState2] = React.useState({
    band_3: false,
    dance_3: false,
    music_3: false,
    film_3: false,
    art_3: false,
    research_3: false,
    gardening_3: false,
    cooking_3: false,
    debate_3: false,
    acting_3: false,
  });

  const {
    band_3,
    dance_3,
    music_3,
    film_3,
    art_3,
    research_3,
    gardening_3,
    cooking_3,
    debate_3,
    acting_3,
  } = state2;
  const handleChange3 = (event) => {
    setState2({
      ...state2,
      [event.target.name]: event.target.checked,
    });
    pushIntoStorage(event.target.name);
  };

  // ***********************************  QUESTION 4  ***********************************
  const [state3, setState3] = React.useState({
    acm: false,
    chemC: false,
    DSC: false,
    sorority: false,
    frat: false,
    gamedev: false,
    IT: false,
    artC: false,
    philosophy: false,
    theatre: false,
    filmC: false,
    astronomyC: false,
  });
  const {
    acm,
    chemC,
    DSC,
    sorority,
    frat,
    gamedev,
    IT,
    artC,
    philosophy,
    theatre,
    filmC,
    astronomyC,
  } = state3;
  const handleChange4 = (event) => {
    setState3({
      ...state3,
      [event.target.name]: event.target.checked,
    });
    pushIntoStorage(event.target.name);
  };

  // ***********************************  BUTTON CTRL  ***********************************
  const navigate = useNavigate();
  const btnHandler = () => {
    navigate("/academicInfo");
  };
  return (
    // ***********************************  QUESTION 1  ***********************************
    <Box
      sx={{ flexGrow: 1, p: 2 }}
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
            What are your favorite subjects?
          </Typography>
        </Grid>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={math}
                onChange={handleChange}
                name="math"
                sx={{ color: grey[800], "&.Mui-checked": { color: grey[600] } }}
              />
            }
            label="Math"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={english}
                onChange={handleChange}
                name="english"
                sx={{ color: grey[800], "&.Mui-checked": { color: grey[600] } }}
              />
            }
            label="English"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={art}
                onChange={handleChange}
                name="art"
                sx={{ color: grey[800], "&.Mui-checked": { color: grey[600] } }}
              />
            }
            label="Art"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={biology}
                onChange={handleChange}
                name="biology"
                sx={{ color: grey[800], "&.Mui-checked": { color: grey[600] } }}
              />
            }
            label="Biology"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={chemistry}
                onChange={handleChange}
                name="chemistry"
                sx={{ color: grey[800], "&.Mui-checked": { color: grey[600] } }}
              />
            }
            label="Chemistry"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={history}
                onChange={handleChange}
                name="history"
                sx={{ color: grey[800], "&.Mui-checked": { color: grey[600] } }}
              />
            }
            label="History"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={music}
                onChange={handleChange}
                name="music"
                sx={{ color: grey[800], "&.Mui-checked": { color: grey[600] } }}
              />
            }
            label="Music"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={drama}
                onChange={handleChange}
                name="drama"
                sx={{ color: grey[800], "&.Mui-checked": { color: grey[600] } }}
              />
            }
            label="Drama"
          />
        </FormGroup>

        <FormControl
          sx={{
            m: -40,
            left: "278%",
            top: -90,
            width: 300,
          }}
        >
          <Grid sx={{ left: "150%", top: -50, width: 500, mt: -4, mb: 2 }}>
            <Typography sx={{ fontWeight: "bold" }} variant="h6" align="left">
              What career field are you most interested in?
            </Typography>
          </Grid>
          <InputLabel
            style={{ color: "#FFFFFF" }}
            sx={{ mt: 2 }}
            id="career-select-question-label"
          >
            Select Career Field
          </InputLabel>
          <Select
            labelId="career-select-question-label"
            id="career-select-question"
            value={career}
            label="Select Career Field..."
            style={{ color: "#FFFFFF" }}
            onChange={handleChange2}
          >
            <MenuItem value={10}>Engineering</MenuItem>
            <MenuItem value={11}>Education</MenuItem>
            <MenuItem value={12}>Business</MenuItem>
            <MenuItem value={13}>Arts</MenuItem>
            <MenuItem value={14}>Architecture</MenuItem>
            <MenuItem value={15}>Journalism</MenuItem>
          </Select>

          <FormControl
            sx={{
              m: 2,
              left: "-190%",
              top: 340,
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
                Which activities are you most interested in?
              </Typography>
            </Grid>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={band_3}
                    onChange={handleChange3}
                    name="band_3"
                    sx={{
                      color: grey[800],
                      "&.Mui-checked": { color: grey[600] },
                    }}
                  />
                }
                label="Band"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={dance_3}
                    onChange={handleChange3}
                    name="dance_3"
                    sx={{
                      color: grey[800],
                      "&.Mui-checked": { color: grey[600] },
                    }}
                  />
                }
                label="Dance"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={music_3}
                    onChange={handleChange3}
                    name="music_3"
                    sx={{
                      color: grey[800],
                      "&.Mui-checked": { color: grey[600] },
                    }}
                  />
                }
                label="Music"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={film_3}
                    onChange={handleChange3}
                    name="film_3"
                    sx={{
                      color: grey[800],
                      "&.Mui-checked": { color: grey[600] },
                    }}
                  />
                }
                label="Film"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={art_3}
                    onChange={handleChange3}
                    name="art_3"
                    sx={{
                      color: grey[800],
                      "&.Mui-checked": { color: grey[600] },
                    }}
                  />
                }
                label="Art"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={research_3}
                    onChange={handleChange3}
                    name="research_3"
                    sx={{
                      color: grey[800],
                      "&.Mui-checked": { color: grey[600] },
                    }}
                  />
                }
                label="Research"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={gardening_3}
                    onChange={handleChange3}
                    name="gardening_3"
                    sx={{
                      color: grey[800],
                      "&.Mui-checked": { color: grey[600] },
                    }}
                  />
                }
                label="Gardening"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={cooking_3}
                    onChange={handleChange3}
                    name="cooking_3"
                    sx={{
                      color: grey[800],
                      "&.Mui-checked": { color: grey[600] },
                    }}
                  />
                }
                label="Cooking"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={debate_3}
                    onChange={handleChange3}
                    name="debate_3"
                    sx={{
                      color: grey[800],
                      "&.Mui-checked": { color: grey[600] },
                    }}
                  />
                }
                label="Debate"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={acting_3}
                    onChange={handleChange3}
                    name="acting_3"
                    sx={{
                      color: grey[800],
                      "&.Mui-checked": { color: grey[600] },
                    }}
                  />
                }
                label="Acting"
              />
            </FormGroup>

            <FormControl
              sx={{
                m: -40,
                left: "325%",
                mt: -90,
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
                  Which clubs/organizations are you interested in?
                </Typography>
              </Grid>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={acm}
                      onChange={handleChange4}
                      name="acm"
                      sx={{
                        color: grey[800],
                        "&.Mui-checked": { color: grey[600] },
                      }}
                    />
                  }
                  label="Association of Computing Machinery (ACM)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={chemC}
                      onChange={handleChange4}
                      name="chemC"
                      sx={{
                        color: grey[800],
                        "&.Mui-checked": { color: grey[600] },
                      }}
                    />
                  }
                  label="Chemistry Club"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={DSC}
                      onChange={handleChange4}
                      name="DSC"
                      sx={{
                        color: grey[800],
                        "&.Mui-checked": { color: grey[600] },
                      }}
                    />
                  }
                  label="Developer Student Club (DSC)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={sorority}
                      onChange={handleChange4}
                      name="sorority"
                      sx={{
                        color: grey[800],
                        "&.Mui-checked": { color: grey[600] },
                      }}
                    />
                  }
                  label="Sororities"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={frat}
                      onChange={handleChange4}
                      name="frat"
                      sx={{
                        color: grey[800],
                        "&.Mui-checked": { color: grey[600] },
                      }}
                    />
                  }
                  label="Fraternities"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={gamedev}
                      onChange={handleChange4}
                      name="gamedev"
                      sx={{
                        color: grey[800],
                        "&.Mui-checked": { color: grey[600] },
                      }}
                    />
                  }
                  label="Game Developer Association"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={IT}
                      onChange={handleChange4}
                      name="IT"
                      sx={{
                        color: grey[800],
                        "&.Mui-checked": { color: grey[600] },
                      }}
                    />
                  }
                  label="IT Club"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={artC}
                      onChange={handleChange4}
                      name="artC"
                      sx={{
                        color: grey[800],
                        "&.Mui-checked": { color: grey[600] },
                      }}
                    />
                  }
                  label="Art Club"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={philosophy}
                      onChange={handleChange4}
                      name="philosophy"
                      sx={{
                        color: grey[800],
                        "&.Mui-checked": { color: grey[600] },
                      }}
                    />
                  }
                  label="Philosophy Club"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={theatre}
                      onChange={handleChange4}
                      name="theatre"
                      sx={{
                        color: grey[800],
                        "&.Mui-checked": { color: grey[600] },
                      }}
                    />
                  }
                  label="Theatre Club"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filmC}
                      onChange={handleChange4}
                      name="filmC"
                      sx={{
                        color: grey[800],
                        "&.Mui-checked": { color: grey[600] },
                      }}
                    />
                  }
                  label="Film Association"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={astronomyC}
                      onChange={handleChange4}
                      name="astronomyC"
                      sx={{
                        color: grey[800],
                        "&.Mui-checked": { color: grey[600] },
                      }}
                    />
                  }
                  label="Astronomy Club"
                />
              </FormGroup>
              <Grid item xs={12} sx={{ ml: 10, mt: 10 }}>
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
        </FormControl>
      </FormControl>
    </Box>
  );
}
