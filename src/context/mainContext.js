import React, { useReducer, createContext, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";

import { DataStore } from "@aws-amplify/datastore";
import { Configuration } from "../models";

import { mainReducer } from "../reducers/mainReducer";

//import Amplify from "@aws-amplify/core";
// import { DataStore, Predicates } from "@aws-amplify/datastore";
// import { Round } from "./models";

import { listCourses, listRounds } from "../graphql/custom-queries";
import { listGolfers, listScores } from "../graphql/queries";

import { remoteRefresh, refreshRounds } from "../actions";

const MainStateContext = createContext();
const MainDispatchContext = createContext();

const initialState = {
	staleRounds: false,
	loading: true,
	configurations: [],
	courses: [],
	golfers: [],
	rounds: [],
	errors: null,
};

const refetchRounds = async () => {
	const roundData = await API.graphql(graphqlOperation(listRounds));
	return roundData.data.listRounds.items.filter((round) => !round._deleted);
};

async function fetchInitialState() {
	try {
		let [
			configurations,
			courseData,
			userData,
			roundData,
			scoreData,
		] = await Promise.all([
			DataStore.query(Configuration),
			API.graphql(graphqlOperation(listCourses)),
			API.graphql(graphqlOperation(listGolfers)),
			API.graphql(graphqlOperation(listRounds)),
			API.graphql(graphqlOperation(listScores)),
		]);

		const courses = courseData.data.listCourses.items;
		const golfers = userData.data.listGolfers.items;
		const rounds = roundData.data.listRounds.items?.filter(
			(item) => !item._deleted
		);
		const scores = scoreData.data.listScores.items;

		return {
			loading: false,
			configurations: configurations,
			courses: courses,
			golfers: golfers,
			rounds: rounds,
			scores: scores,
			errors: null,
		};
	} catch (error) {
		console.log(error);
		return {
			loading: false,
			errors: "Error Fetching Inital State",
		};
	}
}

const MainProvider = ({ children }) => {
	const [state, dispatch] = useReducer(mainReducer, initialState);

	useEffect(() => {
		fetchInitialState().then((result) => {
			dispatch(remoteRefresh(result));
		});
	}, []);

	useEffect(() => {
		if (state.staleRounds) {
			refetchRounds().then((result) => {
				dispatch(refreshRounds(result));
			});
		}
	}, [state.staleRounds]);

	return (
		<MainStateContext.Provider value={state}>
			<MainDispatchContext.Provider value={dispatch}>
				{children}
			</MainDispatchContext.Provider>
		</MainStateContext.Provider>
	);
};

const useMainState = () => {
	const mainState = React.useContext(MainStateContext);
	if (mainState === undefined) {
		throw Error("useMainState must be used within a MainProvider");
	}
	return mainState;
};

const useMainDispatch = () => {
	const mainDispatch = React.useContext(MainDispatchContext);
	if (mainDispatch === undefined) {
		throw Error("useMainDispatch must be used within a MainProvider");
	}
	return mainDispatch;
};

export { MainProvider, useMainState, useMainDispatch };
