import { List, Input, Button } from 'antd';
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
import { Typography } from 'antd';
import './TodoList.scss'
import { TodoItem } from 'entities/TodoItem/types';
import { useSelector } from 'react-redux';
import { getTodoItems } from '../../entities/TodoItem/selectors';

const { Title } = Typography;

const TodoList = () => {
    const todoItems = useSelector(getTodoItems)

    return (
        <div className='TodoList'>
            <Title level={3}>Tasks:</Title> 
            <List
                itemLayout="horizontal"
                dataSource={todoItems}
                size="large"
                bordered
                renderItem={(item: TodoItem) => (
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