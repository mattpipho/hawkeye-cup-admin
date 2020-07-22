import React, { Suspense, lazy } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { MainProvider } from "../context/mainContext";

import "../App.css";

const HomePage = lazy(() => import("./HomePage"));
const MaintainCourses = lazy(() => import("./MaintainCourses"));
const MaintainGolfers = lazy(() => import("./MaintainGolfers"));
const MaintainRounds = lazy(() => import("./MaintainRounds"));
const Tasks = lazy(() => import("./Tasks"));
const MaintainConfigurations = lazy(() =>
	import("./configurations/MaintainConfigurations")
);

function App() {
	return (
		<MainProvider>
			<Suspense
				fallback={<div style={{ fontSize: "20px" }}>Loading ...</div>}
			>
				<Router>
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route exact path="/configurations">
							<MaintainConfigurations />
						</Route>
						<Route exact path="/courses">
							<MaintainCourses />
						</Route>
						<Route exact path="/golfers">
							<MaintainGolfers />
						</Route>
						<Route exact path="/rounds">
							<MaintainRounds />
						</Route>
						<Route exact path="/tasks">
							<Tasks />
						</Route>
					</Switch>
				</Router>
			</Suspense>
		</MainProvider>
	);
}

export default withAuthenticator(App);
