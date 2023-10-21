import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice"; 

const DeleteTodo = ({ todoId }) => {
    const dispatch = useDispatch();
    
    const deleteTodo = () => {
        dispatch(removeTodo(todoId)); 
    };

    return (
        <>
            <button onClick={deleteTodo}>Delete todo</button>
        </>
    );
}

export default DeleteTodo;
