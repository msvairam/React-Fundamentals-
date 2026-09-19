    const header = React.createElement(
        'h1',
        { id: 'heading', xyx: 'abc'},
        'Hello World React'
    );

    console.log(header);

    const root = ReactDOM.createRoot(document.getElementById('root'));

    // root.render(header);

    /*

    <div class="parent">
        <div class="child">
            <h1></h1> // Sibliing h1 in React Element should be in Array
            <h1></h1>
        </div>
        <div class="child">
            <h1></h1> // Sibliing h1 in React Element should be in Array
            <h1></h1>
        </div>
    </div>

    */

    const header2 = React.createElement('h1', {}, 'Hello World React from h1 second')

    const child = React.createElement('div', { className: 'child'}, [ header, header2]);
    const child2 = React.createElement('div', { className: 'child2'}, [ header, header2]);
    const parent = React.createElement('div', { className: 'parent'}, [child, child2]);

    console.log(parent);

    root.render(parent);
