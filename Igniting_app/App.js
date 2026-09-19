import React from "react";
import ReactDom from "react-dom/client";

const header = React.createElement('h1', {}, 'Hello World from React1');
const root = ReactDom.createRoot(document.getElementById('root'));

root.render(header);