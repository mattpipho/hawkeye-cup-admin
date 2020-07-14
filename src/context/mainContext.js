import React, { useReducer, createContext, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listCourses } from "../graphql/custom-queries";
import { listGolfers } from "../graphql/queries";

import { remoteRefresh } from "../actions";
import { saveGolfer, updateGolfer, deleteGolfer } from "../utilities";

const MainStateContext = createContext();
const MainDispatchContext = createContext();

const initialState = {
	loading: true,
	courses: [],
	golfers: [],
	errors: null,
};

const mainReducer = (state, action) => {
	switch (action.type) {
		case "ADD_GOLFER":
			saveGolfer(action.values);
			return { ...state, golfers: [...state.golfers, action.values] };
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
		case "REMOTE_REFRESH":
			return action.values;
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
		const courseData = await API.graphql(graphqlOperation(listCourses));
		const courses = courseData.data.listCourses.items;

		const userData = await API.graphql(graphqlOperation(listGolfers));
		const golfers = userData.data.listGolfers.items;

		return {
			loading: false,
			courses: courses,
			golfers: golfers,
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
