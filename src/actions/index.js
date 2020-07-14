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
export const deleteGolfer = (golferId) => {
	return {
		type: "DELETE_GOLFER",
		golferId,
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
	console.log(newHDCP);
	return {
		type: "UPDATE_GOLFER_HDCP",
		golferId,
		newHDCP,
	};
};
