import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteIcon from "@mui/icons-material/Favorite";
import GradingIcon from "@mui/icons-material/Grading";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import BackspaceIcon from '@mui/icons-material/Backspace';

export default function SideTest() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleIcons = (index) => {
    switch (index) {
      case 0:
        return <FavoriteIcon />;
      case 1:
        return <GradingIcon />;
      case 2:
        return <AttachMoneyIcon />;
      case 3:
        return <SchoolIcon />;
      case 4:
        return <ContentPasteIcon />;
      default:
        return <FavoriteIcon />;
    }
  };
  const navigate = useNavigate();
  const handleClick = (text,anchor) => {
    //update with new pages accordingly
    console.log(text);
    switch (text) {
      case "Personal Interests":
        navigate("/personalInt");
        break;
      case "Academic Information":
        navigate("/academicInfo");
        break;
      case "Institution Type":
        navigate("/institutionType");
        break;
      case "Submit":
        navigate("/submit");
        break;
      default:
        toggleDrawer(anchor,false)
        break;
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          {[
            "Personal Interests",
            "Academic Information",
            "Budget",
            "Institution Type",
            "Submit",
          ].map((text, index) => (
            <ListItem button onClick={() => handleClick(text)} key={text}>
              <ListItemIcon>{handleIcons(index)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      <Divider />
      <List>
          <ListItem button onClick={() => toggleDrawer(anchor, false)}>
              <ListItemIcon><BackspaceIcon /></ListItemIcon>
              <ListItemText primary="Back" />
            </ListItem>
      </List>
      {/*<List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button 
          sx={{top: 0, right: 0}}
          onClick={toggleDrawer(anchor, true)}
          >
              MENU
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        <Divider />
        </React.Fragment>
      ))}
    </div>
  );
}