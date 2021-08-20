import React, { useReducer, createContext, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";

import { DataStore } from "@aws-amplify/datastore";
import { Configuration } from "../models";

//import Amplify from "@aws-amplify/core";
// import { DataStore, Predicates } from "@aws-amplify/datastore";
// import { Round } from "./models";

import { listCourses, listRounds } from "../graphql/custom-queries";
import { listGolfers, listScores } from "../graphql/queries";

import { remoteRefresh, refreshRounds } from "../actions";
import {
	addTeeTimeGolfer,
	deleteConfiguration,
	deleteGolfer,
	deleteGolferTeeTime,
	deleteRound,
	saveConfiguration,
	saveGolfer,
	saveRound,
	//saveScore,
	updateConfiguration,
	updateGolfer,
} from "../utilities";

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
	return roundData.data.listRounds.items;
};

const mainReducer = (state, action) => {
	switch (action.type) {
		case "ADD_CONFIGURATION":
			saveConfiguration(action.values);
			return {
				...state,
				configurations: [...state.configurations, action.values],
			};
		case "ADD_GOLFER":
			saveGolfer(action.values);
			return { ...state, golfers: [...state.golfers, action.values] };
		case "ADD_ROUND":
			saveRound(action.values);
			return { ...state, rounds: [...state.rounds, action.values] };
		case "ADD_TEE_TIME_GOLFER":
			console.log(action.type, action.teeTimeId, action.golferId);
			addTeeTimeGolfer(action.teeTimeId, action.golferId);
			return { ...state, staleRounds: true };
		case "DELETE_CONFIGURATION":
			const deleteConfigIndex = state.configurations.findIndex(
				(c) => c.id === action.configId
			);
			let configurations = [...state.configurations];
			configurations.splice(deleteConfigIndex, 1);
			deleteConfiguration(action.configId);
			return {
				...state,
				configurations,
			};
		case "DELETE_GOLFER":
			const deleteIndex = state.golfers.findIndex(
				(g) => g.id === action.golferId
			);
			let golfers = [...state.golfers];
			golfers.splice(deleteIndex, 1);
			deleteGolfer(action.golferId);
			return {
				...state,
				golfers: golfers,
			};
		case "DELETE_GOLFER_TEE_TIME":
			deleteGolferTeeTime(action.golferTeeTimeId);
			return {
				...state,
				staleRounds: true,
			};
		case "DELETE_ROUND":
			const deleteRoundIndex = state.rounds.findIndex(
				(r) => r.id === action.roundID
			);
			let rounds = [...state.rounds];
			rounds.splice(deleteRoundIndex, 1);
			deleteRound(action.roundID);
			return {
				...state,
				rounds: rounds,
			};
		case "REFRESH_ROUNDS":
			return { ...state, rounds: action.values, staleRounds: false };
		case "REMOTE_REFRESH":
			return action.values;
		case "UPDATE_ACTIVE_ROUND":
			const activeRoundIndex = state.configurations.findIndex(
				(r) => r.key === "ACTIVE_ROUND"
			);
			let updatedConfigState = [...state.configurations];
			updatedConfigState[activeRoundIndex] = {
				...updatedConfigState[activeRoundIndex],
				value: action.roundID,
			};

			console.log(updatedConfigState[activeRoundIndex]);
			updateConfiguration(updatedConfigState[activeRoundIndex]);
			return { ...state, configurations: updatedConfigState };
		case "UPDATE_GOLFER_HDCP":
			const hdcpIndex = state.golfers.findIndex(
				(g) => g.id === action.golferId
			);
			let hdcpGolferState = [...state.golfers];
			hdcpGolferState[hdcpIndex] = {
				...hdcpGolferState[hdcpIndex],
				handicap: action.newHDCP,
			};
			updateGolfer(hdcpGolferState[hdcpIndex]);
			return { ...state, golfers: hdcpGolferState };
		case "UPDATE_GOLFER_TEAM":
			const golferIndex = state.golfers.findIndex(
				(g) => g.id === action.golferId
			);
			let newGolferState = [...state.golfers];
			newGolferState[golferIndex] = {
				...newGolferState[golferIndex],
				team: action.newTeam,
			};
			updateGolfer(newGolferState[golferIndex]);
			return { ...state, golfers: newGolferState };
		default:
			throw Error("provide a correct action");
	}
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
		const rounds = roundData.data.listRounds.items;
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
