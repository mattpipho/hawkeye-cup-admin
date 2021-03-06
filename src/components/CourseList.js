import React from "react";
import { Table, Button } from "antd";

import { useMainState } from "../context/mainContext";

const CourseList = ({ dispatch }) => {
	const mainState = useMainState();

	mainState.courses.sort((a, b) => a.name.localeCompare(b.name));
	const columns = [
		// {
		// 	title: "ID",
		// 	dataIndex: "id",
		// },
		{
			title: "Name",
			dataIndex: "name",
		},
		{
			title: "Short Name",
			dataIndex: "shortName",
		},
		{
			title: "Holes",
			render: (record) => {
				if (!record.holes) return <div>0</div>;
				return <div>{record.holes.items.length}</div>;
			},
		},
		{
			title: "Action",
			key: "action",
			render: (text, record) => (
				<span>
					{/* <Button
						onClick={() =>
							dispatch({
								type: "DISPLAY_EDIT_COURSE",
								courseId: record.id,
							})
						}
					>
						Edit
					</Button> */}
					<Button
						onClick={() =>
							dispatch({
								type: "DISPLAY_IMPORT_HOLES",
								courseId: record.id,
							})
						}
					>
						Import Holes
					</Button>
				</span>
			),
		},
	];

	return (
		<Table
			title={() => "Course List"}
			columns={columns}
			dataSource={mainState.courses}
			rowKey="id"
			size="small"
			pagination={{ pageSize: 50 }}
			// rowSelection={{ type: "radio", ...rowSelection }}
		/>
	);
};

export default CourseList;
