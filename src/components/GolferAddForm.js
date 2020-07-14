import React from "react";
import { Form, Button, Input } from "antd";
import { addGolfer } from "../actions";
import { layout, tailLayout } from "../formLayouts";
import { useMainDispatch } from "../context/mainContext";

const CourseAddForm = () => {
	const [form] = Form.useForm();
	const mainDispatch = useMainDispatch();

	const onFinish = (values) => {
		mainDispatch(addGolfer(values));
		form.resetFields();
	};
	const onReset = () => {
		form.resetFields();
	};

	return (
		<div>
			<Form
				{...layout}
				size="small"
				form={form}
				name="control-hooks"
				onFinish={onFinish}
			>
				<Form.Item name="firstName" label="First Name">
					<Input />
				</Form.Item>
				<Form.Item
					name="lastName"
					label="Last Name"
					rules={[
						{
							required: true,
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name="email"
					label="Email"
					rules={[
						{
							required: true,
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item name="team" label="Team">
					<Input />
				</Form.Item>
				<Form.Item name="handicap" label="Handicap">
					<Input />
				</Form.Item>

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
export default CourseAddForm;
