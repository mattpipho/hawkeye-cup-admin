import React from "react";
import MainLayout from "./MainLayout";
import CourseList from "./CourseList";

import { withAuthenticator } from "@aws-amplify/ui-react";

function App() {
	return (
		<MainLayout>
			<CourseList />
		</MainLayout>
	);
}

export default withAuthenticator(App);
