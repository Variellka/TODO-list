import { List, Input, Button } from 'antd';
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
import { Typography } from 'antd';
import './TodoList.scss'
import { TodoItem } from 'widgets/TodoWidget/types';

const { Title } = Typography;

interface TodoListProps {
    items: TodoItem[]
}

const TodoList = (props: TodoListProps) => {
    const {items} = props 

    return (
        <div className='TodoList'>
            <Title level={3}>Tasks:</Title> 
            <List
                itemLayout="horizontal"
                dataSource={items}
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