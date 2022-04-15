import React, { Component } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GradingIcon from "@mui/icons-material/Grading";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import CheckIcon from "@mui/icons-material/Check";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

import { styled } from "@mui/system";

export default function SideBox() {
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
  const handleClick = (text) => {
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
    }
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Drawer
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <MenuIcon fontSize="large" />
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
      </Drawer>
    </Box>
  );
}
