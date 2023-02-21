
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Dock, Favorite, History, LocationCity, Person, Person2, Person2Outlined, Person2Sharp, Person3TwoTone, PersonOffRounded, PersonPinCircle, ProductionQuantityLimits, Restore, RunCircle, Work, WorkHistory } from "@mui/icons-material";
import React from "react";


export default function NavMenu(props) {
  console.log (props)

 return (
    
    <BottomNavigation
      showLabels
      value={props.navIndex}
      onChange={(event, newNavIndex) => {
        props.setNavIndex(newNavIndex);
      }}
    >
      <BottomNavigationAction label="Sprints" icon={<RunCircle />} />
      <BottomNavigationAction label="Backlogs" icon={<Work />} />
      <BottomNavigationAction label="Perfil" icon={<Person />} />

    </BottomNavigation>
  )
}