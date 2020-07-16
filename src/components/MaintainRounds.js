import React from "react";
import MainLayout from "./MainLayout";

import RoundList from "./RoundList";
import RoundAddForm from "./RoundAddForm";

const MaintainGolfers = () => {
	return (
		<MainLayout>
			<h1>Rounds</h1>
			<RoundAddForm />
			<RoundList />
		</MainLayout>
	);
};
export default MaintainGolfers;
