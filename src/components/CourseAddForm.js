import React from "react";
import { Form, Button, Input } from "antd";
import { addCourse } from "../actions";
import { layout, tailLayout } from "../formLayouts";

const CourseAddForm = ({ dispatch }) => {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		dispatch(addCourse(values));
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
					label="Course Name"
					rules={[
						{
							required: true,
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name="shortName"
					label="Short Name"
					rules={[
						{
							required: true,
						},
					]}
				>
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
