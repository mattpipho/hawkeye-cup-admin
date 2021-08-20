import React from "react";
// import { useEffect } from "react";

import { InputNumber, Modal } from "antd";

// import { useMainState } from "../context/mainContext";

const ScoreEntry = ({ holeToUpdate, setHoleToUpdate, golfers }) => {
	// const state = useMainState();

	let visible = holeToUpdate ? true : false;

	const scores = golfers.map((golfer) => {
		return (
			<div key={golfer.id}>
				{golfer.lastName}
				<InputNumber />
			</div>
		);
	});

	return (
		<Modal
			title="Enter Scores"
			visible={visible}
			onOk={() => {
				setHoleToUpdate();
			}}
			onCancel={() => {
				setHoleToUpdate();
			}}
		>
			<div>Hole: {holeToUpdate ? holeToUpdate.number : ""}</div>
			<div>Par: {holeToUpdate ? holeToUpdate.par : ""}</div>
			<div>Handicap: {holeToUpdate ? holeToUpdate.handicap : ""}</div>
			{scores}
		</Modal>
	);
};

export default ScoreEntry;
