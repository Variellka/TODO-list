import { TodoList } from "../../components";
import { Typography } from 'antd';
import './TodoWidget.scss'
import { AddTodo } from "../../features";
import { useAppDispatch } from "../../app/hooks";
import { useCallback } from "react";
import { todoItemsActions } from "./slice";
import { useSelector } from "react-redux";
import { getTodoItems } from "./selectors";
import { TodoItem } from "./types";

const { Title } = Typography;

const TodoWidget = () => {
    const dispatch = useAppDispatch()
    const todoItems = useSelector(getTodoItems)

    const onAddNewComment = useCallback((text?: string) => {
        dispatch(todoItemsActions.addTodo(text))
    }, [dispatch])

    const onDeleteTodo = useCallback((id: number) => {
        dispatch(todoItemsActions.deleteToDo(id))
    }, [dispatch])

    const onSaveEditedTodo = useCallback((todo: TodoItem) => {
        dispatch(todoItemsActions.saveEditedTodo(todo))
    }, [dispatch])

    return ( 
        <div className="TodoWidget">
            <Typography>
                <Title>TO DO LIST</Title>
                <AddTodo onAddNewComment={onAddNewComment}/>
                <TodoList 
                    items={todoItems}
                    onDeleteTodo={onDeleteTodo}
                    onSaveEditedTodo={onSaveEditedTodo}
                />
            </Typography>
        </div> 
    );
};

export default TodoWidget;