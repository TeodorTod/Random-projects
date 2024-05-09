import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { Todo } from "../model/todo.model"
import { inject } from "@angular/core";
import { TodoService } from "../services/todo.service";

export type TodosFilter = "all" | "pending" | "completed";

type TodoStates = {
    todos: Todo[],
    loading: boolean,
    filter: TodosFilter
};

const initialState: TodoStates = {
    todos: [],
    loading: false,
    filter: 'all'
};

export const TodosStore = signalStore(
    { providedIn: "root" },
    withState(initialState),
    withMethods(
        (store, todoService = inject(TodoService)) => ({
            async loadAll() {
                patchState(store, {
                    loading: true
                });
                const todos = await todoService.getTodos();
                patchState(store, {
                    todos,
                    loading: false
                });
            },
            async addTodo(title: string) {
                const todo = await todoService.addTodo({ title, completed: false });
                patchState(store, (state) => ({
                    todos: [...state.todos, todo]
                }))
            },
            async deleteTodo(id: string) {
                await todoService.deleteTodo(id);
                patchState(store, (state) => ({
                    todos: state.todos.filter((todo) => todo.id !== id)
                }))
            }
        })
    )
)