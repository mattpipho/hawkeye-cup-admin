import React, { useState, useEffect } from "react";

import { API, graphqlOperation } from "aws-amplify";
import { listCourses } from "../graphql/queries";

const CourseList = () => {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		fetchCourses();
	}, []);

	async function fetchCourses() {
		try {
			const courseData = await API.graphql(graphqlOperation(listCourses));
			const courses = courseData.data.listCourses.items;
			setCourses(courses);
		} catch (err) {
			console.log("error fetching courses");
		}
	}

	return (
		<div>
			<h1>Course List</h1>
			{courses.map((course) => (
				<div key={course.id}>{course.name}</div>
			))}
		</div>
	);
};

export default CourseList;
