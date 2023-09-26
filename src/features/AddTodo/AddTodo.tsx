import { Layout, Input, Button } from 'antd';
import './AddTodo.scss'
import { useSelector } from 'react-redux';
import { getAddTodo } from './selectors';
import { useAppDispatch } from '../../app/hooks';
import { addTodoActions } from './slice';

interface AddTodoProps {
    onAddNewComment: (text?: string) => void
}

const AddTodo = (props: AddTodoProps) => {
    const {onAddNewComment} = props;
    const text = useSelector(getAddTodo)
    const dispatch = useAppDispatch()

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addTodoActions.setText(e.target.value))
    };

    const onAddTodo = () => {
        if (text) {
            onAddNewComment(text)
            dispatch(addTodoActions.setText(''))    
        }
    }

    return (
        <div className='AddTodo'>
            <Layout hasSider>
                <Input value={text} onChange={onChangeHandler}/>
                <Button type="primary" shape="round" onClick={onAddTodo}>
                    Add new task
                </Button>
            </Layout>
        </div>
       
    );
};

export default AddTodo;