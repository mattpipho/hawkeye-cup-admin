import React from "react";

import { Button } from "antd";

import CourseAddForm from "./CourseAddForm";
import CourseEditForm from "./CourseEditForm";
import CourseImportHoles from "./CourseImportHoles";

const CourseAddSection = ({ display, dispatch, courseId }) => {
	switch (display) {
		case "DISPLAY_BUTTONS":
			return (
				<div>
					<Button
						onClick={() => dispatch({ type: "DISPLAY_ADD_FORM" })}
					>
						Add Course
					</Button>
				</div>
			);
		case "DISPLAY_ADD_FORM":
			return <CourseAddForm dispatch={dispatch} />;
		case "DISPLAY_EDIT_COURSE":
			return <CourseEditForm dispatch={dispatch} courseId={courseId} />;
		case "DISPLAY_IMPORT_HOLES":
			return (
				<CourseImportHoles dispatch={dispatch} courseId={courseId} />
			);
		case "DISPLAY_IMPORT_FORM":
			return <div>Import Form</div>;
		default:
			return <div></div>;
	}
};
export default CourseAddSection;
