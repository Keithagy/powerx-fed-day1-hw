import { Card, Button } from 'antd';

const JobsList = ({ jobs, setJobs }) => {
    const ondeleteClick = (jobIndex) => {
        setJobs((prevState) =>
            prevState.filter((ele, index) => index !== jobIndex)
        );
    };
    const renderJobs = jobs.map((job, jobIndex) => {
        const { title, level, department } = job;

        return (
            <Card
                key={jobIndex}
                style={{ width: '100%' }}
                extra={
                    <Button type="link" onClick={() => ondeleteClick(jobIndex)}>
                        Delete Job
                    </Button>
                }
            >
                <p>
                    {title} in {department}
                </p>
                <p>Level: {level}</p>
            </Card>
        );
    });

    return renderJobs;
};

export default JobsList;
