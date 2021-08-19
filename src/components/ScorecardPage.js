import React from "react";
import { useEffect, useState } from "react";
import MainLayout from "./MainLayout";
import Auth from "@aws-amplify/auth";
import Scorecard from "./Scorecard";

// import { Table, Button, Modal } from "antd";
import { useMainState } from "../context/mainContext";

const ScorecardPage = () => {
	const state = useMainState();
	const [currentGolfer, setGolfer] = useState();
	const [round, setRound] = useState();
	const [golfersInGroup, setGolfersInGroup] = useState();
	const [course, setCourse] = useState();
	const [scores, setScores] = useState();
	const [holeToEdit, setHoleToEdit] = useState();

	const activeRoundID = {
		...state.configurations.find((config) => config.key === "ACTIVE_ROUND"),
	}.value;

	useEffect(() => {
		Auth.currentAuthenticatedUser().then((data) => {
			setGolfer(
				state.golfers.find(
					(golfer) => golfer.email === data.attributes.email
				)
			);
		});
	}, [state.golfers]);

	useEffect(() => {
		setRound(state.rounds.find((round) => round.id === activeRoundID));
	}, [activeRoundID, state.rounds]);

	useEffect(() => {
		if (round && currentGolfer) {
			const teeTime = round.teeTimes.items.find((teeTime) => {
				// return true;
				return teeTime.golfers.items.find((golfer) => {
					return golfer.golfer.id === currentGolfer.id;
				});
			});
			const group = teeTime.golfers.items.map((golfer) =>
				state.golfers.find((g) => g.id === golfer.golfer.id)
			);
			setGolfersInGroup(group);
		}
	}, [round, currentGolfer, state.golfers]);

	useEffect(() => {
		if (round) {
			setCourse(
				state.courses.find((course) => round.courseID === course.id)
			);
		}
	}, [round, state.courses]);

	if (!currentGolfer || !round || !golfersInGroup)
		return <div>...Loading</div>;

	return (
		<MainLayout>
			<Scorecard
				round={round}
				course={course}
				golfers={golfersInGroup}
				holeToEdit={holeToEdit}
				setHoleToEdit={setHoleToEdit}
			/>
		</MainLayout>
	);
};

export default ScorecardPage;
