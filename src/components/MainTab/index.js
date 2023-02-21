import React from "react";

const { Tabs, Tab } = require("@mui/material");

export default function MainTab(props) {
  console.log (props)

  const handleChange = (event, newTabIndex) => {
    props.setTabIndex(newTabIndex);
  }

return (
<Tabs
  value={props.tabIndex}
  onChange={handleChange}
  centered 
>
  <Tab label={props.tab1} />
  <Tab label={props.tab2} />
  
</Tabs>
)}