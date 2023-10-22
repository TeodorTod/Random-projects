import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice"; 
const Todos = () => {
    const todos = useSelector((state) => state.todos); 
    const dispatch = useDispatch();

    const [updatedText, setUpdatedText] = useState(""); 
    const [editMode, setEditMode] = useState(null); 

    const handleUpdateTodo = (todoId) => {
        dispatch(updateTodo({ id: todoId, text: updatedText }));
        setUpdatedText("");
        setEditMode(null);
    };

    return (
        <>
            <div>Todos</div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    {editMode === todo.id ? (
                        <>
                            <input
                                type="text"
                                value={updatedText}
                                onChange={(e) => setUpdatedText(e.target.value)}
                            />
                            <button onClick={() => handleUpdateTodo(todo.id)}>
                                Save
                            </button>
                        </>
                    ) : (
                        <>
                            <span>Text: {todo.text}</span>
                            <button onClick={() => dispatch(removeTodo(todo.id))}>
                               ----- Delete
                            </button>
                            <button onClick={() => setEditMode(todo.id)}>
                               ----- Update
                            </button>
                        </>
                    )}
                </div>
            ))}
        </>
    );
};

export default Todos;
