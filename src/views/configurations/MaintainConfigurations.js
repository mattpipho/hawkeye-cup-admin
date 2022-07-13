import React from "react";
import MainLayout from "../../components/MainLayout";

import ConfigurationList from "./ConfigurationList";
import ConfigurationAddForm from "./ConfigurationAddForm";

const MaintainConfigurations = () => {
	return (
		<MainLayout>
			<h1>Configurations</h1>
			<ConfigurationAddForm />
			<ConfigurationList />
		</MainLayout>
	);
};
export default MaintainConfigurations;
