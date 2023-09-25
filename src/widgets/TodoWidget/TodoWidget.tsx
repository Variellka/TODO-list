import { TodoList } from "../../components";
import { Divider, Typography } from 'antd';

const { Title } = Typography;

const TodoWidget = () => {
    return (
        <Typography>
            <Title>TO DO LIST</Title>
            <Divider />
            <TodoList />
        </Typography>
    );
};

export default TodoWidget;