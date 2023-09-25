import { TodoList } from "../../components";
import { Typography } from 'antd';
import './TodoWidget.scss'
import { AddNewTask } from "../../features";

const { Title } = Typography;

const TodoWidget = () => {
    return ( 
        <div className="TodoWidget">
            <Typography>
                <Title>TO DO LIST</Title>
                <AddNewTask />
                <TodoList />
            </Typography>
        </div> 
    );
};

export default TodoWidget;