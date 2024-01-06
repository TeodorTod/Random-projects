import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoService } from "src/app/services/todo.service";
import * as TodoActions from "../actions/todo.actions";
import { exhaustMap, map } from "rxjs";
import { Todo } from "src/app/models/todo.model";

@Injectable()

export class TodoEffects {

    constructor(private actions$: Actions, private todoService: TodoService) {

    }

    loadTodos$ = createEffect(() => 
        this.actions$.pipe(
            ofType(TodoActions.loadTodos),
            exhaustMap(() => 
                this.todoService
                .getTodos()
                .pipe(map((todos: Todo[]) => TodoActions.loadTodos({todos})))
            )
        )   
    )
}