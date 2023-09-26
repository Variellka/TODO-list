import { List } from 'antd';
import { Typography } from 'antd';
import './TodoList.scss'
import { TodoItem } from '../../widgets/TodoWidget/types';
import dayjs from 'dayjs';
import Todo from '../../components/Todo/Todo';

dayjs().format()

const { Title } = Typography;

interface TodoListProps {
    items: TodoItem[],
    onDeleteTodo: (value: number) => void,
    onSaveEditedTodo: (value: TodoItem) => void
}

const TodoList = (props: TodoListProps) => {
    const {items, onDeleteTodo, onSaveEditedTodo} = props;

    return (
        <div className='TodoList'>
            <Title level={3}>Tasks:</Title> 
            <List
                itemLayout="horizontal"
                dataSource={items}
                size="large"
                bordered
                renderItem={(item: TodoItem) => (
                    <Todo 
                        item={item} 
                        onDeleteTodo={onDeleteTodo} 
                        onSaveEditedTodo={onSaveEditedTodo}
                    key={item.id}
                    />
                )}
            />
        </div>
        
    );
};

export default TodoList;