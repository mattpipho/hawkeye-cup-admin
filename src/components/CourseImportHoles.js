import React from "react";
import { useState, useEffect } from "react";
import { useMainDispatch } from "../context/mainContext";

import { API, graphqlOperation } from "aws-amplify";
import { getCourse } from "../graphql/queries";
import "antd/dist/antd.css";

import { Button, Form, Input, Card, message } from "antd";
import Papa from "papaparse";

import { addHole } from "../actions";

const importHeaders = "courseID,number,par,handicap";

const { TextArea } = Input;

const initialData = { id: "", name: "", shortName: "" };

async function fetchCourse(courseId) {
	try {
		const courseData = await API.graphql(
			graphqlOperation(getCourse, { id: courseId })
		);
		return courseData.data.getCourse;
	} catch (err) {
		console.log("error fetching course");
	}
}
const CourseImportHoles = ({ dispatch, courseId }) => {
	const [form] = Form.useForm();
	const mainDispatch = useMainDispatch();
	const [courseInfo, setCourseInfo] = useState(initialData);

	useEffect(() => {
		fetchCourse(courseId).then((courseInfo) => {
			setCourseInfo(courseInfo);
		});
	}, [courseId]);

	const onFinish = ({ importText }) => {
		importText = importHeaders + "\n" + importText;

		let output = Papa.parse(importText, {
			header: true,
			skipEmptyLines: true,
		});
		if (output.errors.length === 0) {
			output.data.forEach((hole) => {
				console.log("addHole: ", hole);
				mainDispatch(addHole(hole));
			});
		} else {
			message.error(
				`Unable to Save Data.` + JSON.stringify(output.errors)
			);
			console.log(output.errors);
		}
	};

	const onClose = () => {
		console.log("Close Import Form");
		dispatch({ type: "DISPLAY_BUTTONS" });
	};

	if (!courseInfo.id) return <div>Loading...</div>;
	return (
		<Card size="small" title="Import Games">
			<div>Course ID: {courseInfo.id}</div>
			<div>Course Name: {courseInfo.name}</div>
			<Form
				size="small"
				form={form}
				name="import-games"
				onFinish={onFinish}
			>
				<Form.Item name="importText" label="Import CSV text">
					<TextArea rows={4} placeholder={importHeaders} />
				</Form.Item>
				<p>({importHeaders})</p>

				<Form.Item>
					<Button type="primary" htmlType="submit">
						Import
					</Button>
					<Button htmlType="button" onClick={onClose}>
						Close
					</Button>
				</Form.Item>
			</Form>
		</Card>
	);
};

export default CourseImportHoles;
