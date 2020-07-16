import { v4 as uuidv4 } from "uuid";

export const addCourse = (values) => {
	values = { ...values, id: uuidv4() };
	console.log(values.id);
	return {
		type: "ADD_COURSE",
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
	console.log(values.id);
	return {
		type: "ADD_ROUND",
		values,
	};
};
export const deleteGolfer = (golferId) => {
	return {
		type: "DELETE_GOLFER",
		golferId,
	};
};
export const deleteRound = (roundID) => {
	return {
		type: "DELETE_ROUND",
		roundID,
	};
};

export const remoteRefresh = (values) => {
	return {
		type: "REMOTE_REFRESH",
		values,
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
