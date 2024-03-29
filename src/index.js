import React from "react";
import {createRoot} from "react-dom/client";
import * as serviceWorker from "./serviceWorker";

import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";

import App from "./components/App";

import "antd/dist/antd.min.css";

Amplify.configure(awsconfig);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
