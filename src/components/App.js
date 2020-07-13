import React, { Suspense, lazy } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../App.css";

const HomePage = lazy(() => import("./HomePage"));
const MaintainCourses = lazy(() => import("./MaintainCourses"));
const MaintainGolfers = lazy(() => import("./MaintainGolfers"));

function App() {
	return (
		<Suspense
			fallback={<div style={{ fontSize: "20px" }}>Loading ...</div>}
		>
			<Router>
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route exact path="/courses">
						<MaintainCourses />
					</Route>
					<Route exact path="/golfers">
						<MaintainGolfers />
					</Route>
				</Switch>
			</Router>
		</Suspense>
	);
}

export default withAuthenticator(App);
