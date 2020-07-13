import { v4 as uuidv4 } from "uuid";

export const addCourse = (values) => {
	values = { ...values, id: uuidv4() };
	console.log(values.id);
	return {
		type: "ADD_COURSE",
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
