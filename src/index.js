import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./styles/app.scss";

ReactDOM.render(<App name={"New visitor"} />, document.getElementById("root"));

module.hot.accept(); // accept hot reloadinga
