import ReactDOM  from "react-dom/client";
import { App } from "./App";
import React from "react";

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);

root.render(
    <>
        <App />
    </>
);

