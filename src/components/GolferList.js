import React from "react";
import { Table, Button, Select, Input } from "antd";

import { useMainState, useMainDispatch } from "../context/mainContext";
import { updateGolferTeam, deleteGolfer, updateGolferHDCP } from "../actions";

const GolferList = () => {
	const mainState = useMainState();
	const dispatch = useMainDispatch();

	mainState.golfers.sort((a, b) => a.lastName.localeCompare(b.lastName));
	const columns = [
		{
			title: "First Name",
			dataIndex: "firstName",
		},
		{
			title: "Last Name",
			dataIndex: "lastName",
		},
		{
			title: "Email",
			dataIndex: "email",
		},
		{
			title: "Team",
			dataIndex: "team",
			render: (text, golfer) => (
				<Select
					value={golfer.team}
					size={"small"}
					style={{ width: 100 }}
					onChange={(newTeam) =>
						dispatch(updateGolferTeam(golfer.id, newTeam))
					}
					options={[
						{ label: "Black", value: "Black" },
						{ label: "Gold", value: "Gold" },
					]}
				/>
			),
		},
		{
			title: "HDCP",
			render: (text, golfer) => (
				<Input
					value={golfer.handicap}
					size={"small"}
					style={{ width: 100 }}
					onChange={(newHDCP) =>
						dispatch(
							updateGolferHDCP(golfer.id, newHDCP.target.value)
						)
					}
				/>
			),
		},
		{
			title: "Action",
			key: "action",
			render: (text, golfer) => (
				<span>
					<Button
						size={"small"}
						onClick={() => dispatch(deleteGolfer(golfer.id))}
					>
						Delete
					</Button>
				</span>
			),
		},
	];

	return (
		<Table
			title={() => "Golfer List"}
			columns={columns}
			dataSource={mainState.golfers}
			rowKey="id"
			size="small"
			pagination={{ pageSize: 50 }}
			rowClassName={(record, index) => {
				switch (record.team) {
					case "Black":
						return "black-indicator-row";
					case "Gold":
						return "gold-indicator-row";

					default:
						return "";
				}
			}}
		/>
	);
};

export default GolferList;
