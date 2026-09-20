import React from "react";
import ReactDom from "react-dom/client";

 // React Element => Object => HtmlElement to render in Root
// React Element => React Element JS Object => HtmlElement(render)

//const header = React.createElement('h1', { id: 'heading' }, 'Hello World from React1');

// console.log(header);

// JSX - HTML Like or XML like syntax
// JSX => React Element => React Element JS Object => HtmlElement(render)

const jsxHeader1 = (
    <h1>
        Welcome to React2
    </h1>
)

const jsxHeader = [
(
    <h1 id="heading" className="test" tabIndex="1">
        Hello World from React
        <span>App</span>
    </h1>
),
(
    <h1 id="heading" className="test" tabIndex="1">
        Welcome to React
    </h1>
), jsxHeader1, <a href="/">Home Page</a>
]

console.log(jsxHeader);

const root = ReactDom.createRoot(document.getElementById('root'));
// console.log(root);

root.render(jsxHeader);