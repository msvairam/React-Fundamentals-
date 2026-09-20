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
        <span>App1</span>
    </h1>
),
(
    <h1 id="heading" className="test" tabIndex="1">
        Welcome to React
    </h1>
), jsxHeader1, <a className="home" href="/">Home Page</a>
]

// console.log(jsxHeader);
// Example of Sibling React Element 
const HeaderComponent1 = () => {
    return (
        [
        <div className="container">
            <h1>Hello World</h1>
        </div>,
        <div className="main-container">
            <h1>Welcome</h1>
        </div>
        ]
    );
}

const Title = () => {
    return (
        <h6>Home Page Title</h6>
    )
}


// Component Compsoition -> One Component use to another component
const HeaderComponent = () => {
    return (
        <div className="container">
            <Title />
            <h1>Welcome React</h1>
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));
// console.log(root);

root.render(<HeaderComponent />);