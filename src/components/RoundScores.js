import React from "react";

const RoundHeader = ({ round }) => {
	return (
		<div>
			<h3>{round.name}</h3>
			<h4>{round.course.name}</h4>
		</div>
	);
};

const RoundScoreCard = ({ course }) => {
	const holeHeadings = [
		"Hole",
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
		"Total",
	];

	return (
		<table>
			<tbody>
				<tr className={"hole-heading"}>
					{holeHeadings.map((item) => (
						<td key={item}>{item}</td>
					))}
				</tr>
				<tr className={"par-heading"}>
					{holeHeadings.map((item, index) => {
						if (item === "Hole") return <td key={item}>{"Par"}</td>;
						if (item === "OUT") return <td key={item}>{""}</td>;
						if (item === "IN") return <td key={item}>{""}</td>;
						if (item === "Total") return <td key={item}>{""}</td>;

						return <td key={item}>{item}</td>
					})}
				</tr>
			</tbody>
		</table>
	);
};

const RoundScores = ({ round }) => {
	return (
		<>
			<RoundHeader round={round} />
			<RoundScoreCard />
		</>
	);
};

export default RoundScores;
