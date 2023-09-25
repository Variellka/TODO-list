import { List, Input, Button } from 'antd';
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
import { Typography } from 'antd';
import './TodoList.scss'

const { Title } = Typography;

const data = [
    {
        title: 'Ant Design Title 1',
        date: '25.09.2023'
    },
    {
        title: 'Ant Design Title 2',
        date: '25.09.2023'
    },
    {
        title: 'Ant Design Title 3',
        date: '25.09.2023'
    },
    {
        title: 'Ant Design Title 4',
        date: '25.09.2023'
    },
  ];

const TodoList = () => {
    return (
        <div className='TodoList'>
            <Title level={3}>Tasks:</Title> 
            <List
                itemLayout="horizontal"
                dataSource={data}
                size="large"
                bordered
                renderItem={(item) => (
                    <List.Item
                        actions={[
                            <Button type='dashed'><EditTwoTone /></Button>,
                            <Button type='dashed'><DeleteTwoTone /></Button>
                        ]}
                    >
                        <List.Item.Meta
                            title={<Input value={item.title} disabled/>}
                            description={item.date}
                        />
                    </List.Item>
                )}
            />
        </div>
        
    );
};

export default TodoList;