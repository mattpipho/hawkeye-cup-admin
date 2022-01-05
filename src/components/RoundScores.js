import React from "react";
import { useMainState } from "../context/mainContext";

const RoundHeader = ({ round }) => {
	return (
		<div>
			<h3>{round.name}</h3>
			<h4>{round.course.name}</h4>
		</div>
	);
};

const RoundScoreCard = ({ round }) => {
	const { courses, golfers, scores } = useMainState();
	const holeHeadings = [
		"HOLE",
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		"OUT",
		10,
		11,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		"IN",
		"TOTAL",
	];

	const holes = courses.find((item) => item.id === round.course.id).holes
		.items;

	const getPar = (hole) => {
		if (!holes) return "";
		return holes.find((item) => item.number === hole).par;
	};
	const getHandicap = (hole) => {
		if (!holes) return "";
		return holes.find((item) => item.number === hole).handicap;
	};

	const getParTotals = () => {
		let parIn = 0;
		let parOut = 0;

		holes.forEach((hole) => {
			hole.number > 9 ? (parIn += hole.par) : (parOut += hole.par);
		});

		return { in: parIn, out: parOut, total: parIn + parOut };
	};

	const getGolferScoreRow = (golfer) => {
		const golferScores = scores.filter(
			(score) =>
				score.roundID === round.id && score.golferID === golfer.id
		);

		const golferTotals = golferScores.reduce(
			(totals, score) => {
				score.hole.number <= 9
					? (totals.out += score.score)
					: (totals.in += score.score);
				return totals;
			},
			{ in: 0, out: 0 }
		);
		const getCurrentHoleScore = (hole) =>
			golferScores.find((score) => score.hole.number === hole)?.score;

		return (
			<tr>
				<td>{golfer.lastName}</td>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((holeNumber) => (
					<td>{getCurrentHoleScore(holeNumber)}</td>
				))}
				<td>{golferTotals.out}</td>
				{[10, 11, 12, 13, 14, 15, 16, 17, 18].map((holeNumber) => (
					<td>{getCurrentHoleScore(holeNumber)}</td>
				))}
				<td>{golferTotals.in}</td>
				<td>{golferTotals.out + golferTotals.in}</td>
			</tr>
		);
	};

	return (
		<table className={"center scorecard"}>
			<tbody>
				<tr className={"hole-heading"}>
					{holeHeadings.map((item) => (
						<td key={item}>{item}</td>
					))}
				</tr>
				<tr className={"par-heading"}>
					{holeHeadings.map((item, index) => {
						if (item === "HOLE") return <td>{"PAR"}</td>;
						if (item === "OUT")
							return <td>{getParTotals().out}</td>;
						if (item === "IN")
							return <td key={item}>{getParTotals().in}</td>;
						if (item === "TOTAL")
							return <td key={item}>{getParTotals().total}</td>;

						return <td key={item}>{getPar(item)}</td>;
					})}
				</tr>
				<tr className={"handicap-heading"}>
					{holeHeadings.map((item, index) => {
						if (item === "HOLE")
							return <td key={item}>{"HANDICAP"}</td>;
						if (item === "OUT") return <td key={item}>{""}</td>;
						if (item === "IN") return <td key={item}>{""}</td>;
						if (item === "TOTAL") return <td key={item}>{""}</td>;

						return <td key={item}>{getHandicap(item)}</td>;
					})}
				</tr>
				{golfers
					.sort((a, b) => a.lastName.localeCompare(b.lastName))
					.map((golfer) => {
						return getGolferScoreRow(golfer);
					})}
			</tbody>
		</table>
	);
};

const RoundScores = ({ round }) => {
	return (
		<>
			<RoundHeader round={round} />
			<RoundScoreCard round={round} />
		</>
	);
};

export default RoundScores;
