import { List, Input, Button, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import './TodoList.scss'
import { TodoItem } from 'widgets/TodoWidget/types';
import dayjs from 'dayjs';

dayjs().format()

const { Title } = Typography;

interface TodoListProps {
    items: TodoItem[],
    onDeleteTodo: (value: string) => void,
}

const TodoList = (props: TodoListProps) => {
    const {items, onDeleteTodo} = props;

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
                            <Popconfirm
                                title="Are you sure you want to delete?"
                                onConfirm={() => {
                                    onDeleteTodo(item.date)
                                }}
                            >
                                <Button 
                                    danger
                                    type='primary'
                                >
                                   <DeleteOutlined />
                                </Button>
                           </Popconfirm>
                        ]}
                    >
                        <List.Item.Meta
                            title={<Input value={item.title} />}
                            description={dayjs(item.date).format('MMMM D, YYYY h:mm A')}
                        />
                    </List.Item>
                )}
            />
        </div>
        
    );
};

export default TodoList;