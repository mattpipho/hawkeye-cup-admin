import React, { useState } from "react";
import { Table, Button, Modal } from "antd";

import { useMainState, useMainDispatch } from "../../context/mainContext";
import { deleteConfiguration } from "../../actions";

const ConfigurationList = () => {
	const mainState = useMainState();
	const dispatch = useMainDispatch();

	const [displayConfirmDelete, setConfirmDeleteDisplay] = useState(false);
	if (!mainState.configurations || mainState.configurations.length === 0)
		return <div>No Configurations Found</div>;

	mainState.configurations.sort((a, b) => a.key.localeCompare(b.key));

	const columns = [
		{
			title: "Key",
			dataIndex: "key",
		},
		{
			title: "Value",
			dataIndex: "value",
		},

		{
			title: "Action",
			key: "action",
			render: (text, configuration) => (
				<span>
					<Button
						size={"small"}
						onClick={() => setConfirmDeleteDisplay(true)}
					>
						Delete
					</Button>{" "}
					<Modal
						title="Confirm Delete"
						visible={displayConfirmDelete}
						onOk={() => {
							dispatch(deleteConfiguration(configuration.id));
							setConfirmDeleteDisplay(false);
						}}
						onCancel={() => setConfirmDeleteDisplay(false)}
					>
						<p>
							Are you sure you want to delete this Configuration?
						</p>
					</Modal>
				</span>
			),
		},
	];

	return (
		<>
			<Table
				title={() => "Configuration List"}
				columns={columns}
				dataSource={mainState.configurations}
				rowKey="id"
				size="small"
				pagination={{ pageSize: 50 }}
			/>
		</>
	);
};

export default ConfigurationList;
