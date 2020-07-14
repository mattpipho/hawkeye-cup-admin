import React from "react";
import MainLayout from "./MainLayout";

import GolferAddForm from "./GolferAddForm";
import GolferList from "./GolferList";

const MaintainGolfers = () => {
	return (
		<MainLayout>
			<h1>Golfers</h1>
			<GolferAddForm />
			<GolferList />
		</MainLayout>
	);
};
export default MaintainGolfers;
