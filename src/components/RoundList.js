import React, { useState } from "react";
import { Table, Button, Modal } from "antd";

import { useMainState, useMainDispatch } from "../context/mainContext";
import { deleteRound } from "../actions";

const RoundList = () => {
	const mainState = useMainState();
	const dispatch = useMainDispatch();

	const [displayConfirmDelete, setConfirmDeleteDisplay] = useState(false);

	mainState.rounds.sort((a, b) => a.name.localeCompare(b.name));

	const getCourseName = (courseId) => {
		return mainState.courses.find((course) => course.id === courseId).name;
	};

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
		},
		{
			title: "Course",
			// dataIndex: "courseName",
			render: (text, round) => {
				return getCourseName(round.courseID);
			},
		},

		{
			title: "Action",
			key: "action",
			render: (text, round) => (
				<span>
					<Button
						size={"small"}
						onClick={() => setConfirmDeleteDisplay(true)}
					>
						Delete
					</Button>{" "}
					<Modal
						title="Confirm Delete"
						visible={displayConfirmDelete}
						onOk={() => {
							dispatch(deleteRound(round.id));
							setConfirmDeleteDisplay(false);
						}}
						onCancel={() => setConfirmDeleteDisplay(false)}
					>
						<p>Are you sure you want to delete this round?</p>
					</Modal>
				</span>
			),
		},
	];

	return (
		<>
			<Table
				title={() => "Round List"}
				columns={columns}
				dataSource={mainState.rounds}
				rowKey="id"
				size="small"
				pagination={{ pageSize: 50 }}
			/>
		</>
	);
};

export default RoundList;
