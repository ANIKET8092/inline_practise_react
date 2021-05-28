//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

var date = new Date();
var hours = date.getHours();

var greeting;

const customStyle = {
  color: ""
};

if (hours > 12 && hours < 18) {
  greeting = "Good afternoon";
  customStyle.color = "green";
} else if (hours > 18 && hours < 24) {
  greeting = "Good evening";
  customStyle.color = "blue";
} else {
  greeting = "Good morning";
  customStyle.color = "red";
}
console.log(hours);

ReactDom.render(
  <h1 style={customStyle}>{greeting}</h1>,
  document.getElementById("root")
);
