import {
	addHole,
	addTeeTime,
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

export const mainReducer = (state, action) => {
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
		case "ADD_HOLE":
			addHole(action.values);
			return { ...state };
		case "ADD_ROUND":
			saveRound(action.values);
			return { ...state, rounds: [...state.rounds, action.values] };
		case "ADD_TEE_TIME":
			addTeeTime(action.roundID, action.id);
			return { ...state, staleRounds: true };
		case "ADD_TEE_TIME_GOLFER":
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
