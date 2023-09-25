import { List } from 'antd';
import { FormOutlined, DeleteOutlined } from '@ant-design/icons';

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
        <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
            <List.Item
                actions={
                    [
                    <FormOutlined />,
                    <DeleteOutlined />
                ]}
        >
            <List.Item.Meta
              title={item.title}
              description={item.date}
            />
        </List.Item>
        )}
      />
    );
};

export default TodoList;