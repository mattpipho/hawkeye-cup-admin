import React from "react";
import { Input, Modal } from "antd";

const RoundHeading = ({ round }) => {
	console.log(round);
	return (
		<div>
			{round.id} - {round.name}
		</div>
	);
};
const ScorecardHeader = ({ golfers }) => {
	console.log(golfers);

	const listGolfers = golfers.map((golfer) => (
		<th key={golfer.id}>{golfer.lastName}</th>
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

const ScoreCardRow = ({ holeInfo, scores, setHoleToEdit }) => {
	return (
		<tr>
			<td
				onClick={() => {
					console.log("onclick");
					setHoleToEdit(holeInfo.number);
				}}
			>
				{holeInfo.number}
			</td>
			<td>{holeInfo.par}</td>
			<td>{holeInfo.handicap}</td>
		</tr>
	);
};
const SumRow = ({ values }) => {
	return (
		<tr>
			{values.map((value) => (
				<td>{value}</td>
			))}
		</tr>
	);
};

const ScorecardRows = ({ course, golfers, scores, setHoleToEdit }) => {
	let rows = [];

	let sum = {
		par: {
			out: 0,
			in: 0,
			total: 0,
		},
	};

	for (let i = 1; i <= 9; i++) {
		const holeInfo = course.holes.items.find((hole) => hole.number === i);
		sum.par.out += holeInfo.par;
		let row = (
			<ScoreCardRow
				key={i}
				holeInfo={holeInfo}
				setHoleToEdit={setHoleToEdit}
			/>
		);
		rows.push(row);
	}
	rows.push(<SumRow key={"OUT"} values={["OUT", sum.par.out, "", "", ""]} />);

	for (let i = 10; i <= 18; i++) {
		const holeInfo = course.holes.items.find((hole) => hole.number === i);
		sum.par.in += holeInfo.par;
		let row = (
			<ScoreCardRow
				key={i}
				holeInfo={holeInfo}
				setHoleToEdit={setHoleToEdit}
			/>
		);
		rows.push(row);
	}
	rows.push(<SumRow key={"IN"} values={["IN", sum.par.in, "", "", ""]} />);
	rows.push(
		<SumRow
			key={"TOT"}
			values={["TOT", sum.par.out + sum.par.in, "", "", ""]}
		/>
	);

	return <tbody>{rows}</tbody>;
};

const ScoreEntry = ({ holeNumber, setHoleToEdit }) => {
	return (
		<Modal
			title="Enter Scores"
			visible={holeNumber}
			onOk={() => {
				setHoleToEdit();
			}}
			onCancel={() => {
				setHoleToEdit();
			}}
		>
			<div>Hole: {holeNumber}</div>
			<button>-</button>
			<Input />
			<button>+</button>
		</Modal>
	);
};

const Scorecard = ({
	round,
	golfers,
	course,
	scores,
	holeToEdit,
	setHoleToEdit,
}) => {
	if (!golfers) return <div>...Loading Scorecard</div>;

	return (
		<div>
			<RoundHeading round={round} />
			<div>{course.name}</div>
			<table>
				<ScorecardHeader golfers={golfers} />
				<ScorecardRows
					course={course}
					golfers={golfers}
					scores={scores}
					setHoleToEdit={setHoleToEdit}
				/>
			</table>
			<ScoreEntry holeNumber={holeToEdit} setHoleToEdit={setHoleToEdit} />
		</div>
	);
};

export default Scorecard;
