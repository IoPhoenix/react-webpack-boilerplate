import React from "react";

const App = ({ name }) => {
    return (
        <div className="app">
            <h1>Helloo, {name ? name : "World!"}</h1>
        </div>
    );
};

export default App;
