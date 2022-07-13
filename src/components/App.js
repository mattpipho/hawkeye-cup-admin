import React, { Suspense, lazy } from "react";
// import { withAuthenticator } from "@aws-amplify/ui-react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MainProvider } from "../context/mainContext";

import "../App.css";

const HomePage = lazy(() => import("./HomePage"));
const MaintainCourses = lazy(() => import("./MaintainCourses"));
const MaintainGolfers = lazy(() => import("./MaintainGolfers"));
const MaintainRounds = lazy(() => import("./MaintainRounds"));
const Tasks = lazy(() => import("./Tasks"));
const ScorecardPage = lazy(() => import("./ScorecardPage"));
const MaintainConfigurations = lazy(() =>
	import("./configurations/MaintainConfigurations")
);

function App() {
	return (
		<Authenticator>
			<MainProvider>
				<Suspense
					fallback={
						<div style={{ fontSize: "20px" }}>Loading ...</div>
					}
				>
					<Router>
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route
								path="/configurations"
								element={<MaintainConfigurations />}
							/>
							<Route
								path="/courses"
								element={<MaintainCourses />}
							/>
							<Route
								path="/golfers"
								element={<MaintainGolfers />}
							/>
							<Route
								path="/rounds"
								element={<MaintainRounds />}
							/>
							<Route path="/tasks" element={<Tasks />} />
							<Route
								path="/scorecard"
								element={<ScorecardPage />}
							/>
						</Routes>
					</Router>
				</Suspense>
			</MainProvider>
		</Authenticator>
	);
}

export default App;
