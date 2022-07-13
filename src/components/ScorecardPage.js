import React from "react";
import MainLayout from "./MainLayout";
import RoundScores from "./RoundScores";

import { Row, Col } from "antd";

import { useMainState } from "../context/mainContext";

const ScorecardPage = () => {
	const { rounds } = useMainState();

	return (
		<MainLayout>
			<Row justify="center">
				<Col span={24}>
					{rounds
						.sort((a, b) => a.name.localeCompare(b.name))
						.map((round) => (
							<RoundScores key={round.id} round={round} />
						))}
				</Col>
			</Row>
		</MainLayout>
	);
};

export default ScorecardPage;
