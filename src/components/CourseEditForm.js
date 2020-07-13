import React from "react";
import { Form, Button, Input } from "antd";
import { layout, tailLayout } from "../formLayouts";

const CourseEditForm = ({ courseId, dispatch }) => {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		//dispatch(addHoles(values));
		form.resetFields();
	};
	const onReset = () => {
		form.resetFields();
	};

	const holeInfo = [];
	for (let i = 1; i <= 18; i++) {
		holeInfo.push(
			<div key={i}>
				<Form.Item name={`h${i}par`} label={`Hole ${i} Par`}>
					<Input />
				</Form.Item>
				<Form.Item name={`h${i}hdcp`} label={`Hole ${i} HDCP`}>
					<Input />
				</Form.Item>
			</div>
		);
	}

	return (
		<div>
			<Form
				{...layout}
				size="small"
				form={form}
				name="control-hooks"
				onFinish={onFinish}
			>
				<Form.Item
					name="name"
					label="Course Name"
					rules={[
						{
							required: true,
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item name="shortName" label="Short Name">
					<Input />
				</Form.Item>

				{/* {holeInfo} */}

				<Form.Item {...tailLayout}>
					<Button type="primary" htmlType="submit">
						Save Course
					</Button>
					<Button htmlType="button" onClick={onReset}>
						Cancel
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};
export default CourseEditForm;
