import { List, Popconfirm, Button, Input, message } from 'antd';
import dayjs from 'dayjs';
import { DeleteOutlined,  EditOutlined, CheckOutlined } from '@ant-design/icons';
import { TodoItem } from '../../entity';
import { useState } from 'react';

interface TodoProps {
    item: TodoItem,
    onDeleteTodo: (value: number) => void,
    onSaveEditedTodo: (value: TodoItem) => void
}

const Todo = (props: TodoProps) => {
    const {item, onDeleteTodo, onSaveEditedTodo} = props;
    const [readonly, setReadonly] = useState(true)
    const [text, setText] = useState(item.title)

    return (
        <List.Item
            actions={[
                readonly ? 
                <Button 
                    type='primary'
                    onClick={() => setReadonly(false)}
                >
                    <EditOutlined />
                </Button>
                :
                <Popconfirm
                    title="save"
                    onOpenChange={() => {
                        setReadonly(true);
                        message.success('saved');
                        onSaveEditedTodo({
                            ...item,
                            title: text
                        })
                    }}
                >
                    <Button 
                        type='primary'
                    >
                       <CheckOutlined />
                    </Button>
                </Popconfirm>
               ,
                <Popconfirm
                    title="Are you sure you want to delete?"
                    onConfirm={() => {
                        onDeleteTodo(item.id)
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
                title={<Input value={text} disabled={readonly} onChange={(e) => setText(e.target.value)}/>}
                description={dayjs(item.date).format('MMMM D, YYYY h:mm A')}
            />
        </List.Item>
    );
};

export default Todo;