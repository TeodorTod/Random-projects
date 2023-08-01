import { DataSource } from "@angular/cdk/collections";
import { Injectable } from "@angular/core";
import { UserInterface } from "../types/users.interface";
import { BehaviorSubject, Observable } from "rxjs";
import { UsersService } from "./users.service";


@Injectable()
export class UsersDataSource extends DataSource<UserInterface> {
    users$ = new BehaviorSubject<UserInterface[]>([]);
    isLoading$ = new BehaviorSubject<boolean>(false);

    constructor(private usersService: UsersService) {
        super()
    }

    connect(): Observable<UserInterface[]> {
        return this.users$.asObservable();
    }

    disconnect() {
        this.users$.complete();
    }

    loadUsers() {
        this.isLoading$.next(true);
        this.usersService.fetchUsers().subscribe((users) => {
            this.users$.next(users)
            this.isLoading$.next(false);
        })
    }
}