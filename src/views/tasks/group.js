import React from "react";
import { Select, Card } from "antd";

import { addTeeTimeGolfer, deleteGolferTeeTime } from "../../actions";

import { useMainDispatch } from "../../context/mainContext";
import GolferDisplay from "./golfer-display";

const Group = ({ teeTime, groupName, availableGolfers }) => {
	const dispatch = useMainDispatch();

	const options = availableGolfers.map((golfer) => ({
		label: golfer.lastName,
		value: golfer.id,
	}));

	const listGolfers = teeTime.golfers.items
		.filter((a) => !a._deleted)
		.map((item) => (
			<GolferDisplay
				key={item.id}
				golfer={item.golfer}
				deleteTeeTimeGolfer={() =>
					dispatch(deleteGolferTeeTime(item.id))
				}
			/>
		));

	return (
		<Card
			key={teeTime.id}
			title={groupName}
			bordered={true}
			// style={{ width: 100% }}
			size="small"
		>
			{listGolfers}
			<div className="add-golfer-select-wrapper">
				<Select
					value="Add Golfer"
					placeholder="Add Golfer"
					style={{
						width: 125,
					}}
					onChange={(golferId) => {
						dispatch(addTeeTimeGolfer(teeTime.id, golferId));
					}}
					options={options}
				/>
			</div>
		</Card>
	);
};

export default Group;
