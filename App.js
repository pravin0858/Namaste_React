
import React from "react";
import ReactDOM from "react-dom/client"; 


const heading = React.createElement("div" , {id:"parent"},
  [React.createElement("div",{id:"child"},
  [React.createElement("h1",{},"I'm an h1 element"),React.createElement("h2",{},"i'm an h2 element")]),        React.createElement("div",{id:"child2"},
  [React.createElement("h1",{},"I'm an h1 element"),React.createElement("h2",{},"i'm an h2 element")])]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);