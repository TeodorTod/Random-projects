import { useSelector } from "react-redux"
import DeleteTodo from "./DeleteTodo";

const Todos = () => {
    const todos = useSelector(state => state.todos);
    console.log(todos[0].text);
    return (
        <>
            <div>Todos</div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <span>Text: {todo.text} <DeleteTodo todoId={todo.id}/></span>
                </div>
            ))}
        </>
    )
}

export default Todos