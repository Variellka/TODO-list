import { Layout, Input, Button } from 'antd';
import './AddNewTask.scss'

const AddNewTask = () => {
    return (
        <div className='AddNewTask'>
            <Layout hasSider>
                <Input />
                <Button type="primary" shape="round">
                    Add new task
                </Button>
            </Layout>
        </div>
       
    );
};

export default AddNewTask;