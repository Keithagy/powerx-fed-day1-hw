import React, { useState } from 'react';
import JobsList from './components/JobsList';
import AddJobPostingForm from './components/AddJobPostingForm';
import { Typography, Row, Col } from 'antd';
import './App.css';

const { Title } = Typography;

function App() {
    const [jobs, setJobs] = useState([]);

    return (
        <>
            <Title level={1}>Careers</Title>
            <Row>
                <Col span={12}>
                    <AddJobPostingForm setJobs={setJobs} />
                </Col>
                <Col span={12}>
                    <JobsList jobs={jobs} setJobs={setJobs} />
                </Col>
            </Row>
        </>
    );
}

export default App;
