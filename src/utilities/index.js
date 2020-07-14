import { Auth, API, graphqlOperation } from "aws-amplify";
import {
	createGolfer,
	updateGolfer as gqlUpdateGolfer,
	deleteGolfer as gqlDeleteGolfer,
} from "../graphql/mutations";
import { message } from "antd";

export const deleteGolfer = async (golfer) => {
	try {
		await API.graphql(
			graphqlOperation(gqlDeleteGolfer, {
				input: {
					id: golfer,
				},
			})
		);
		message.info("Golfer Deleted");
	} catch (error) {
		console.log(error);
		message.error("Golfer Not Deleted");
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

export const saveGolfer = async (values) => {
	try {
		await API.graphql(graphqlOperation(createGolfer, { input: values }));
		message.info("Golfer Added");
	} catch (error) {
		console.log(error);
		message.error("Golfer Not Added");
	}
};

export const updateGolfer = async (golfer) => {
	console.log(golfer);
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
		message.info("Golfer Updated");
	} catch (error) {
		console.log(error);
		message.error("Golfer Not Updated");
	}
};
