import React from "react";
import { Box } from "@mui/system";
import { FormControl, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const CustomTextField = styled((props) => (
  <TextField InputProps={{disabledUnderline: true}} {...props} />
))(({theme}) => ({
  '& .MuiFilledInput-root':{
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    },
    '&.Mui-focused': {
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      boxShadow: '${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px',
      borderColor: theme.palette.primary.main, 
    },
    },
}));
const GPA_min = 0.00;
const GPA_max = 6.00;

const SAT_min = 0;
const SAT_max = 1600;

const ACT_min = 0;
const ACT_max = 36;
export default function AcademicInfoBody() {
  const [GPA_value, setValue] = React.useState({});
  const [SAT_value, setValue2] = React.useState({});
  const [ACT_value, setValue3] = React.useState({});
  // ***********************************  BUTTON CTRL  ***********************************
  const navigate = useNavigate();
  const btnHandler = () => {
    navigate("/budget");
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
          left: "-12.5%",
          top: -255,
          width: 850,
          height: 300
        }}
      >
      <FormControl
        sx={{
          m: 32,
          left: "-27%",
          top: -255
        }}
      >
        <Grid item xs={6}>
          <Typography
            sx={{ mb: 2, fontWeight: "bold" }}
            variant="h6"
            align="left"
          >
            What is your weighted GPA?
          </Typography>
        </Grid>
        <CustomTextField
          label="GPA [0.0 - 6.0]"
          defaultValue="0.0"
          type="number"
          id="GPA"
          variant="filled"
          inputProps={{GPA_min, GPA_max}}
          value={GPA_value}
          onChange={(e) => {
            var GPA_value =  parseFloat(e.target.value, 10);
            if(GPA_value > GPA_max) GPA_value = GPA_max;
            if(GPA_value < GPA_min) GPA_value = GPA_min;
            setValue(GPA_value);
          }}
          sx={{input: {color:'black'} }}
          style={{marginTop:11}}
        />
      </FormControl>


      <FormControl
        sx={{
          m: 32,
          left: "-27%",
          top: -655,
        }}>
        <Grid item xs={6}>
          <Typography
            sx={{ mb: 2, fontWeight: "bold" }}
            variant="h6"
            align="left"
          >
            What is your total SAT score?
          </Typography>
        </Grid>
        <CustomTextField
          label="SAT 0 - 1600"
          defaultValue='0'
          type="number"
          id="SAT_SCORE"
          variant="filled"
          inputProps={{SAT_min, SAT_max}}
          value={SAT_value}
          onChange={(e) => {
            var SAT_value =  parseInt(e.target.value, 10);
            if(SAT_value > SAT_max) SAT_value = SAT_max;
            if(SAT_value < SAT_min) SAT_value = SAT_min;
            setValue2(SAT_value);
          }}
          sx={{input: {color:'black'} }}
          style={{marginTop:11}}
        />
      </FormControl>


      <FormControl
        sx={{
          m: 32,
          left: "39%",
          top: -1513,
        }}>
        <Grid item xs={6}>
          <Typography
            sx={{ mb: 2, fontWeight: "bold" }}
            variant="h6"
            align="left"
          >
            What is your total ACT score?
          </Typography>
        </Grid>
        <CustomTextField
          label="ACT 0 - 36"
          defaultValue='0'
          type="number"
          id="ACT_SCORE"
          variant="filled"
          inputProps={{ACT_min, ACT_max}}
          value={ACT_value}
          onChange={(e) => {
            var ACT_value =  parseInt(e.target.value, 10);
            if(ACT_value > ACT_max) ACT_value = ACT_max;
            if(ACT_value < ACT_min) ACT_value = ACT_min;
            setValue3(ACT_value);
          }}
          sx={{input: {color:'black'} }}
          style={{marginTop:11}}
        />
      </FormControl>
      <FormControl
        sx={{
          m: 32,
          left: "39%",
          top: -1513,
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
