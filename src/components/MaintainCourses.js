import React from "react";
import { useReducer, useEffect } from "react";

import { API, graphqlOperation } from "aws-amplify";
import { listCourses } from "../graphql/custom-queries";
import { createCourse, createHole } from "../graphql/mutations";
import { message } from "antd";

import MainLayout from "./MainLayout";
import CourseList from "./CourseList";
import CourseAddSection from "./CourseAddSection";

const initialState = {
	courses: [],
	holes: [],
	addSectionDisplay: "DISPLAY_BUTTONS",
};
const reducer = (state, action) => {
	switch (action.type) {
		case "DISPLAY_BUTTONS":
			return { ...state, addSectionDisplay: "DISPLAY_BUTTONS" };
		case "DISPLAY_ADD_FORM":
			return { ...state, addSectionDisplay: "DISPLAY_ADD_FORM" };
		case "DISPLAY_EDIT_COURSE":
			return {
				...state,
				addSectionDisplay: "DISPLAY_EDIT_COURSE",
				courseId: action.courseId,
			};
		case "DISPLAY_IMPORT_HOLES":
			return {
				...state,
				addSectionDisplay: "DISPLAY_IMPORT_HOLES",
				courseId: action.courseId,
			};
		case "SET_COURSES":
			return { ...state, courses: action.payload };
		case "ADD_COURSE":
			addCourse(action.values);
			return {
				...state,
				courses: [...state.courses, action.values],
				addSectionDisplay: "DISPLAY_BUTTONS",
			};
		case "ADD_HOLE":
			addHole(action.values);
			return {
				...state,
				addSectionDisplay: "DISPLAY_BUTTONS",
			};
		default:
			return new Error();
	}
};

async function addCourse(values) {
	try {
		await API.graphql(graphqlOperation(createCourse, { input: values }));
		message.info("Course Added");
	} catch (error) {
		console.log(error);
		message.error("Course Not Added");
	}
}

async function addHole(values) {
	try {
		await API.graphql(graphqlOperation(createHole, { input: values }));
		message.info("Hole " + values.number + " Added");
	} catch (error) {
		console.log(error);
		message.error("Hole " + values.number + " Not Added");
	}
}
const MaintainCourse = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		fetchCourses();
	}, []);

	async function fetchCourses() {
		try {
			const courseData = await API.graphql(graphqlOperation(listCourses));
			const courses = courseData.data.listCourses.items;
			dispatch({ type: "SET_COURSES", payload: courses });
		} catch (err) {
			console.log("error fetching courses");
		}
	}

	return (
		<MainLayout>
			<h1>Maintain Courses</h1>
			<CourseAddSection
				display={state.addSectionDisplay}
				dispatch={dispatch}
				courseId={state.courseId}
			/>

			<CourseList courses={state.courses} dispatch={dispatch} />
		</MainLayout>
	);
};
export default MaintainCourse;
