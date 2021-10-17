import { Card, Button, Form, Input, Select } from 'antd';

const AddJobPostingForm = ({ setJobs }) => {
    const onFinish = (newJob) => {
        setJobs((state) => [...state, newJob]);
    };

    return (
        <Card title="Add Job Posting" style={{ width: '100%' }}>
            <Form
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Job Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: 'Job Title required',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Level"
                    name="level"
                    rules={[
                        {
                            required: true,
                            message: 'Level required',
                        },
                    ]}
                >
                    <Select>
                        <Select.Option value="internship">
                            Internship
                        </Select.Option>
                        <Select.Option value="entry">Entry</Select.Option>
                        <Select.Option value="experienced">
                            Experienced
                        </Select.Option>
                        <Select.Option value="manager">Manager</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Department"
                    name="department"
                    rules={[
                        {
                            required: true,
                            message: 'Department required',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Summary" name="summary">
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default AddJobPostingForm;
