import React from "react";
import { useEffect, useState } from "react";
import { Select, Tabs, Row, Col } from "antd";

import { addTeeTime, updateActiveRound } from "../../actions";

import { getAvailableGolfers } from "../../utilities";

import Group from "./group";

import MainLayout from "../../components/MainLayout";
import { useMainState, useMainDispatch } from "../../context/mainContext";

const { TabPane } = Tabs;

const lookUpCourseName = (courses, courseID) => {
	const courseData = courses.find((course) => course.id === courseID);
	if (!courseData) return "Course Not Set";
	return courseData.name;
};

const Tasks = () => {
	const state = useMainState();
	const dispatch = useMainDispatch();
	const [viewRoundID, setViewRoundID] = useState();

	const activeRoundID = {
		...state.configurations.find((config) => config.key === "ACTIVE_ROUND"),
	}.value;

	useEffect(() => {
		setViewRoundID(activeRoundID);
	}, [activeRoundID]);

	if (!activeRoundID) return <div>loading...</div>;

	const roundOptions = state.rounds
		.sort((a, b) => a.name.localeCompare(b.name))
		.map((round) => ({
			label: `${round.name} (${lookUpCourseName(
				state.courses,
				round.courseID
			)})`,
			value: round.id,
		}));

	const updateViewRound = (key) => {
		setViewRoundID(key);
	};

	return (
		<MainLayout>
			<div>
				<h1>Active Round:</h1>
				<Select
					value={activeRoundID}
					style={{ width: 450 }}
					options={roundOptions}
					onChange={(roundID) => dispatch(updateActiveRound(roundID))}
				/>
			</div>
			<hr />
			<h1>Tee Times</h1>
			<Tabs
				defaultActiveKey={activeRoundID}
				activeKey={viewRoundID}
				onChange={updateViewRound}
			>
				{state.rounds.map((round) => {
					round.teeTimes.items.sort((a, b) =>
						a.name.localeCompare(b.name)
					);
					if (state.staleRounds) return "loading..";

					return (
						<TabPane tab={round.name} key={round.id}>
							<h3>{round.name}</h3>
							<div className="site-card-wrapper">
								<Row gutter={{ xs: 1, sm: 1, md: 16, lg: 16 }}>
									{round.teeTimes.items.map(
										(teeTime, index) => (
											<Col
												span={{
													xs: 32,
													sm: 32,
													md: 4,
													lg: 4,
												}}
												key={teeTime.id}
											>
												<Group
													teeTime={teeTime}
													groupName={`Group ${
														index + 1
													}`}
													availableGolfers={getAvailableGolfers(
														state.golfers,
														round.teeTimes
													)}
												/>
											</Col>
										)
									)}

									{round.teeTimes.items.length < 4 && (
										<Col>
											<button
												onClick={() => {
													console.log(
														"Add Tee Time",
														viewRoundID
													);
													dispatch(
														addTeeTime(viewRoundID)
													);
												}}
											>
												Add Tee Time
											</button>
										</Col>
									)}
								</Row>
							</div>
						</TabPane>
					);
				})}
			</Tabs>
		</MainLayout>
	);
};
export default Tasks;
