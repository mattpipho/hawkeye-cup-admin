import React, { useState } from "react";

import ScoreEntry from "./ScoreEntry";

import { useMainState } from "../context/mainContext";

const getScore = (scores, golferID, roundID, holeID) => {
	const score = scores.find((scoreItem) => {
		return (
			scoreItem.golferID === golferID &&
			scoreItem.roundID === roundID &&
			scoreItem.holeID === holeID
		);
	});
	if (score) return score.score;
	return 0;
};

const activeRound = (configurations) => {
	const activeRoundIndex = configurations.findIndex(
		(r) => r.key === "ACTIVE_ROUND"
	);
	return configurations[activeRoundIndex].value;
};
const RoundHeading = ({ round }) => {
	return <div>{round.name}</div>;
};
const ScorecardHeader = ({ golfers }) => {
	const listGolfers = golfers.map((golfer) => (
		<th key={golfer.id}>{golfer.lastName.substring(0, 5)}</th>
	));
	return (
		<thead>
			<tr>
				<th>#</th>
				<th>Par</th>
				<th>HDCP</th>
				{listGolfers}
			</tr>
		</thead>
	);
};

const ScoreCardRow = ({ holeInfo, golfers, scores, setHoleToUpdate }) => {
	const state = useMainState();
	const holeScores = golfers.map((golfer, index) => {
		let score = getScore(
			state.scores,
			golfer.id,
			activeRound(state.configurations),
			holeInfo.id
		);

		return (
			<td
				key={index}
				onClick={() => {
					setHoleToUpdate(holeInfo);
				}}
			>
				{score ? score : ""}
			</td>
		);
	});

	return (
		<tr>
			<td>{holeInfo.number}</td>
			<td>{holeInfo.par}</td>
			<td>{holeInfo.handicap}</td>
			{holeScores}
		</tr>
	);
};
const SumRow = ({ values }) => {
	return (
		<tr>
			{values.map((value, index) => (
				<td key={index}>{value}</td>
			))}
		</tr>
	);
};

const sumGolferScores = (scores, round, golfer) => {
	let initialTotal = { out: 0, in: 0, total: 0 };
	let golferTotals = scores
		.filter(
			(scoreInfo) =>
				scoreInfo.golferID === golfer.id &&
				scoreInfo.roundID === round.id
		)
		.reduce((totals, scoreInfo) => {
			if (scoreInfo.hole.number <= 9)
				totals.out = totals.out + scoreInfo.score;
			else totals.in = totals.in + scoreInfo.score;
			totals.total = totals.total + scoreInfo.score;
			return totals;
		}, initialTotal);

	return golferTotals;
};

const ScorecardRows = ({ round, course, golfers, scores, setHoleToUpdate }) => {
	if (!golfers) return <div>loading golfers</div>;

	const golferTotals = golfers.map((golfer) =>
		sumGolferScores(scores, round, golfer)
	);

	let rows = [];

	let sum = {
		par: {
			out: 0,
			in: 0,
			total: 0,
		},
	};
	rows.push(
		<SumRow
			key={"HDCP"}
			values={[
				"",
				"",
				"",
				golfers[0].handicap,
				golfers[1].handicap,
				golfers[2].handicap,
				golfers[3].handicap,
			]}
		/>
	);
	for (let i = 1; i <= 9; i++) {
		const holeInfo = course.holes.items.find((hole) => hole.number === i);
		sum.par.out += holeInfo.par;
		let row = (
			<ScoreCardRow
				key={i}
				holeInfo={holeInfo}
				golfers={golfers}
				setHoleToUpdate={setHoleToUpdate}
			/>
		);
		rows.push(row);
	}

	rows.push(
		<SumRow
			key={"OUT"}
			values={[
				"OUT",
				sum.par.out,
				"",
				golferTotals[0].out,
				golferTotals[1].out,
				golferTotals[2].out,
				golferTotals[3].out,
			]}
		/>
	);

	for (let i = 10; i <= 18; i++) {
		const holeInfo = course.holes.items.find((hole) => hole.number === i);
		sum.par.in += holeInfo.par;
		let row = (
			<ScoreCardRow
				key={i}
				holeInfo={holeInfo}
				golfers={golfers}
				setHoleToUpdate={setHoleToUpdate}
			/>
		);
		rows.push(row);
	}
	rows.push(
		<SumRow
			key={"IN"}
			values={[
				"IN",
				sum.par.in,
				"",
				golferTotals[0].in,
				golferTotals[1].in,
				golferTotals[2].in,
				golferTotals[3].in,
			]}
		/>
	);
	rows.push(
		<SumRow
			key={"TOT"}
			values={[
				"TOT",
				sum.par.out + sum.par.in,
				"",
				golferTotals[0].total,
				golferTotals[1].total,
				golferTotals[2].total,
				golferTotals[3].total,
			]}
		/>
	);

	return <tbody>{rows}</tbody>;
};

const Scorecard = ({ round, golfers, course, scores }) => {
	const [holeToUpdate, setHoleToUpdate] = useState();

	if (!golfers) return <div>...Loading Scorecard</div>;

	return (
		<React.Fragment>
			<RoundHeading round={round} />
			<div>{course.name}</div>
			<table className={"scorecardTable"}>
				<ScorecardHeader golfers={golfers} />
				<ScorecardRows
					round={round}
					course={course}
					golfers={golfers}
					scores={scores}
					setHoleToUpdate={setHoleToUpdate}
				/>
			</table>
			<ScoreEntry
				holeToUpdate={holeToUpdate}
				setHoleToUpdate={setHoleToUpdate}
				golfers={golfers}
			/>
		</React.Fragment>
	);
};

export default Scorecard;
