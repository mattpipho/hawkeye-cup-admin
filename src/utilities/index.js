import { Auth, API, graphqlOperation } from "aws-amplify";
import { DataStore, Predicates } from "@aws-amplify/datastore";
import { Configuration } from "../models";

import {
	createConfiguration,
	createGolfer,
	createRound,
	createTeeTimeGolfer,
	deleteConfiguration as gqlDeleteConfiguration,
	deleteGolfer as gqlDeleteGolfer,
	deleteTeeTimeGolfer as gqlDeleteGolferTeeTime,
	deleteRound as gqlDeleteRound,
	updateConfiguration as gqlUpdateConfiguration,
	updateGolfer as gqlUpdateGolfer,
	createTeeTime as gqlCreateTeeTime,
} from "../graphql/mutations";
import { message } from "antd";

export const addTeeTimeGolfer = async (teeTimeID, golferID) => {
	console.log(teeTimeID, golferID);
	try {
		await API.graphql(
			graphqlOperation(createTeeTimeGolfer, {
				input: { golferID, teeTimeID },
			})
		);
		message.success("Tee Time Golfer Added");
	} catch (error) {
		console.log(error);
		message.error("Tee Time Golfer Not Added");
	}
};
export const deleteConfiguration = async (config) => {
	try {
		await API.graphql(
			graphqlOperation(gqlDeleteConfiguration, {
				input: {
					id: config,
				},
			})
		);
		message.success("Configuration Deleted");
	} catch (error) {
		console.log(error);
		message.error("Configuration Not Deleted");
	}
};
export const deleteGolfer = async (golfer) => {
	try {
		await API.graphql(
			graphqlOperation(gqlDeleteGolfer, {
				input: {
					id: golfer,
				},
			})
		);
		message.success("Golfer Deleted");
	} catch (error) {
		console.log(error);
		message.error("Golfer Not Deleted");
	}
};

export const deleteGolferTeeTime = async (golferTeeTimeId) => {
	try {
		await API.graphql(
			graphqlOperation(gqlDeleteGolferTeeTime, {
				input: {
					id: golferTeeTimeId,
					_version: 1,
				},
			})
		);
		message.success("Golfer Tee Time Deleted");
	} catch (error) {
		console.log(error);
		message.error("Golfer Tee Time Not Deleted");
	}
};

export const deleteRound = async (round) => {
	try {
		await API.graphql(
			graphqlOperation(gqlDeleteRound, {
				input: {
					id: round,
				},
			})
		);
		message.success("Round Deleted");
	} catch (error) {
		console.log(error);
		message.error("Round Not Deleted");
	}
};

export const listUsers = async () => {
	let apiName = "AdminQueries";
	let path = "/listUsers";
	let myInit = {
		queryStringParameters: {
			groupname: "Admin",
			limit: 100,
			// token: nextToken,
		},
		headers: {
			"Content-Type": "application/json",
			Authorization: `${(await Auth.currentSession())
				.getAccessToken()
				.getJwtToken()}`,
		},
	};

	const rest = await API.get(apiName, path, myInit);
	console.log(rest);
	// nextToken = NextToken;
	return rest;
};

export const saveConfiguration = async (values) => {
	try {
		await API.graphql(
			graphqlOperation(createConfiguration, { input: values })
		);
		message.success("Configuration Added");
	} catch (error) {
		console.log(error);
		message.error("Configuration Not Added");
	}
};
export const saveGolfer = async (values) => {
	try {
		await API.graphql(graphqlOperation(createGolfer, { input: values }));
		message.success("Golfer Added");
	} catch (error) {
		console.log(error);
		message.error("Golfer Not Added");
	}
};
export const saveRound = async (values) => {
	try {
		await API.graphql(graphqlOperation(createRound, { input: values }));
		await API.graphql(
			graphqlOperation(gqlCreateTeeTime, {
				input: { name: "Group 1", roundID: values.id },
			})
		);
		await API.graphql(
			graphqlOperation(gqlCreateTeeTime, {
				input: { name: "Group 2", roundID: values.id },
			})
		);
		await API.graphql(
			graphqlOperation(gqlCreateTeeTime, {
				input: { name: "Group 3", roundID: values.id },
			})
		);
		await API.graphql(
			graphqlOperation(gqlCreateTeeTime, {
				input: { name: "Group 4", roundID: values.id },
			})
		);
		await API.graphql(
			graphqlOperation(gqlCreateTeeTime, {
				input: { name: "Group 5", roundID: values.id },
			})
		);
		message.success("Round Added");
	} catch (error) {
		console.log(error);
		message.error("Round Not Added");
	}
};

export const updateConfiguration = async (config) => {
	try {
		const original = await DataStore.query(Configuration, config.id);

		await DataStore.save(
			Configuration.copyOf(original, (updated) => {
				updated.value = config.value;
			})
		);

		// let result = await API.graphql(
		// 	graphqlOperation(gqlUpdateConfiguration, {
		// 		input: {
		// 			id: config.id,
		// 			value: config.value,
		// 			_version: config._version,
		// 		},
		// 	})
		// );
		message.success(`${config.key} updated to ${config.value}`);
	} catch (error) {
		console.log(error);
		message.error(`${config.key} not updated`);
	}
};

export const updateGolfer = async (golfer) => {
	try {
		await API.graphql(
			graphqlOperation(gqlUpdateGolfer, {
				input: {
					id: golfer.id,
					email: golfer.email,
					firstName: golfer.firstName,
					lastName: golfer.lastName,
					team: golfer.team,
					handicap: golfer.handicap,
				},
			})
		);
		message.success("Golfer Updated");
	} catch (error) {
		console.log(error);
		message.error("Golfer Not Updated");
	}
};
