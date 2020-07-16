import React from "react";
import { Form, Button, Input, Select } from "antd";
import { addRound } from "../actions";
import { layout, tailLayout } from "../formLayouts";
import { useMainState, useMainDispatch } from "../context/mainContext";

const RoundAddForm = () => {
	const [form] = Form.useForm();
	const mainState = useMainState();
	const dispatch = useMainDispatch();

	const courseOptions = mainState.courses.map((course) => ({
		label: course.name,
		value: course.id,
	}));

	const onFinish = (values) => {
		dispatch(addRound(values));
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
				<Form.Item
					name="name"
					label="Round Name"
					rules={[
						{
							required: true,
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name="courseID"
					label="Course"
					rules={[
						{
							required: true,
						},
					]}
				>
					<Select options={courseOptions} />
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
export default RoundAddForm;
