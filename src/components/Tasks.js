import React from "react";
import { useEffect, useState } from "react";
import { Select, Tabs, Card, Button, Row, Col } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import {
	updateActiveRound,
	addTeeTimeGolfer,
	deleteGolferTeeTime,
} from "../actions";

import MainLayout from "./MainLayout";
import { useMainState, useMainDispatch } from "../context/mainContext";

const { TabPane } = Tabs;
const { Option } = Select;

const lookUpCourseName = (courses, courseID) => {
	const courseData = courses.find((course) => course.id === courseID);
	if (!courseData) return "Course Not Set";
	return courseData.name;
};

const GolferDisplay = ({ golfer, deleteTeeTimeGolfer }) => {
	console.log(golfer.team);
	return (
		<div className="full-width">
			<div
				className={
					"tee-time-golfer " +
					golfer.team.toLowerCase() +
					"-indicator"
				}
			>
				{golfer.lastName}
			</div>
			<div className="float-left tee-time-golfer-delete">
				<DeleteOutlined onClick={() => deleteTeeTimeGolfer()} />
			</div>
		</div>
	);
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
	const golferOptions = state.golfers
		.sort((a, b) => a.lastName.localeCompare(b.lastName))
		.map((golfer) => ({
			label: golfer.lastName,
			value: golfer.id,
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
								<Row gutter={16}>
									{round.teeTimes.items.map((teeTime) => (
										<Col span={4} key={teeTime.id}>
											<Card
												key={teeTime.id}
												title={teeTime.name}
												bordered={true}
												// style={{ width: 200 }}
												size="small"
											>
												{teeTime.golfers.items.map(
													(item) => (
														<GolferDisplay
															key={item.id}
															golfer={item.golfer}
															deleteTeeTimeGolfer={() =>
																dispatch(
																	deleteGolferTeeTime(
																		item.id
																	)
																)
															}
														/>
													)
												)}
												<div className="add-golfer-select-wrapper">
													<Select
														value="Add Golfer"
														placeholder="Add Golfer"
														style={{
															width: 125,
														}}
														onChange={(
															golferId
														) => {
															dispatch(
																addTeeTimeGolfer(
																	teeTime.id,
																	golferId
																)
															);
														}}
														options={golferOptions}
													/>
												</div>
											</Card>
										</Col>
									))}
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
