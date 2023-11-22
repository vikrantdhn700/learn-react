// Single Kind of structure tag
const heading= React.createElement("h1",{id:"heading", class: "top-head"},"Hello world from JavaScript!");

// For Nested kind of structure
const parents1 = React.createElement(
    "div",
    {id:"parent",class:"parentbx"},
    React.createElement(
        "div",
        {id:"child",class:"childbx"},
        React.createElement(
            "h1", 
            {}, 
            "This is a Heading Tag"
        )
    )
);

// For Sibling kind of structure
const parents2 = React.createElement(
    "div",
    {id:"parent",class:"parentbx"},
    [
        React.createElement(
            "div",
            {id:"child",class:"childbx"}, [
            React.createElement("h1", {}, "This is a h1 Tag"),
            React.createElement("h2", {}, "This is a h2 Tag")
            ]
        ),
        React.createElement(
            "div",
            {id:"child",class:"childbx"}, [
            React.createElement("h1", {}, "This is a h1 Tag"),
            React.createElement("h2", {}, "This is a h2 Tag")
            ]
        )
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parents2);