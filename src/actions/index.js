import { v4 as uuidv4 } from "uuid";

export const addCourse = (values) => {
	values = { ...values, id: uuidv4() };

	return {
		type: "ADD_COURSE",
		values,
	};
};
export const addConfiguration = (values) => {
	values = { ...values, id: uuidv4() };
	return {
		type: "ADD_CONFIGURATION",
		values,
	};
};

export const addGolfer = (values) => {
	values = { ...values, id: uuidv4() };
	return {
		type: "ADD_GOLFER",
		values,
	};
};

export const addHole = (values) => {
	values = { ...values, id: uuidv4() };
	return {
		type: "ADD_HOLE",
		values,
	};
};
export const addRound = (values) => {
	values = { ...values, id: uuidv4() };
	return {
		type: "ADD_ROUND",
		values,
	};
};
export const addTeeTime = (roundID) => {
	return {
		type: "ADD_TEE_TIME",
		roundID,
		id: uuidv4(),
	};
};
export const addTeeTimeGolfer = (teeTimeId, golferId) => {
	return {
		type: "ADD_TEE_TIME_GOLFER",
		teeTimeId,
		golferId,
	};
};

export const deleteConfiguration = (configId) => {
	console.log("delete config", configId);
	return {
		type: "DELETE_CONFIGURATION",
		configId,
	};
};
export const deleteGolfer = (golferId) => {
	return {
		type: "DELETE_GOLFER",
		golferId,
	};
};
export const deleteGolferTeeTime = (golferTeeTimeId) => {
	return {
		type: "DELETE_GOLFER_TEE_TIME",
		golferTeeTimeId,
	};
};
export const deleteRound = (roundID) => {
	return {
		type: "DELETE_ROUND",
		roundID,
	};
};

export const refreshRounds = (values) => {
	return {
		type: "REFRESH_ROUNDS",
		values,
	};
};
export const remoteRefresh = (values) => {
	return {
		type: "REMOTE_REFRESH",
		values,
	};
};

export const updateActiveRound = (roundID) => {
	return {
		type: "UPDATE_ACTIVE_ROUND",
		roundID,
	};
};
export const updateGolferTeam = (golferId, newTeam) => {
	return {
		type: "UPDATE_GOLFER_TEAM",
		golferId,
		newTeam,
	};
};
export const updateGolferHDCP = (golferId, newHDCP) => {
	return {
		type: "UPDATE_GOLFER_HDCP",
		golferId,
		newHDCP,
	};
};
