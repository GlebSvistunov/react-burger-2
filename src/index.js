import React from "react";
import App from "./components/app/app";
import * as ReactDOMClient from "react-dom/client";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById("root"));
