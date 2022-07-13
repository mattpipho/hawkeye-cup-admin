import React from "react";
import { Form, Button, Input } from "antd";
import { addConfiguration } from "../../actions";
import { layout, tailLayout } from "../../formLayouts";
import { useMainDispatch } from "../../context/mainContext";

const ConfigurationAddForm = () => {
	const [form] = Form.useForm();
	const dispatch = useMainDispatch();

	const onFinish = (values) => {
		dispatch(addConfiguration(values));
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
					name="key"
					label="Key"
					rules={[
						{
							required: true,
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name="value"
					label="Value"
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
						Save Configuration
					</Button>
					<Button htmlType="button" onClick={onReset}>
						Cancel
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};
export default ConfigurationAddForm;
