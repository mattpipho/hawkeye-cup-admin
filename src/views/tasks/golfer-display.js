import { DeleteOutlined } from "@ant-design/icons";

const GolferDisplay = ({ golfer, deleteTeeTimeGolfer }) => {
	return (
		<div className="full-width float-left">
			<div
				className={
					"tee-time-golfer " +
					golfer.team?.toLowerCase() +
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
export default GolferDisplay;
