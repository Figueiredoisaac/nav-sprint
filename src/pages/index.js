import MainTab from "@/components/MainTab";
import NavMenu from "../components/NavMenu";
import NavHeader from "../components/NavHeader";
import React, { useEffect } from "react";
import Sprints from "../components/Sprints"
import Backlogs from "../components/Backlogs"
import Profile from "../components/Profile"
import NewBacklogs from "@/components/NewBacklog";
import NewSprints from "@/components/NewSprint";

export default function Home() {

  const [navIndex, setNavIndex] = React.useState(0);
  const [tabIndex, setTabIndex] = React.useState(0);
  const [tabNames, setTabNames] = React.useState({ 
      tab1: "Sprints",
      tab2: "Nova Sprint"
  });
  const [activePage, setActivePage] = React.useState(<Sprints></Sprints>)
  useEffect(() => {
    if (navIndex == 0) {
      setTabNames({
        tab1: "Sprints",
        tab2: "Nova Sprint"
      })
      if (tabIndex == 0){
        setActivePage(<Sprints></Sprints>)
      } else if (tabIndex == 1) {
        setActivePage(<NewSprints></NewSprints>)
      }
    } else if (navIndex == 1) {
      setTabNames({
        tab1: "Backlogs",
        tab2: "Novo BackLog"
      })      
      if (tabIndex == 0){
        setActivePage(<Backlogs></Backlogs>)
      } else if (tabIndex ==1) {
        setActivePage(<NewBacklogs></NewBacklogs>)
      }
      
    } else if (navIndex == 2){
      setTabNames({
        tab1: "-",
        tab2: "-"
      })
      setActivePage(<Profile></Profile>)
    }
  },[navIndex, tabIndex])
  

  return (
    <>
      {navIndex==2?"":<MainTab tab1={tabNames.tab1} tab2={tabNames.tab2} tabIndex={tabIndex} setTabIndex={setTabIndex}></MainTab>}
      {activePage}
      <NavMenu navIndex={navIndex} setNavIndex={setNavIndex}></NavMenu>
    </>
  );
}
