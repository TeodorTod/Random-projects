

import { Injectable, inject } from '@angular/core';
import { UserInterface } from '../types/user.interface';
import { UtilsService } from '../utils/util.service';

@Injectable()
export class UsersService {
    utilService = inject(UtilsService);
    users: UserInterface[] = [];

    addUser(user: UserInterface): void {
        this.users = [...this.users, user];
    }
    removeUser(userId: string): void {
        const updatedUsers = this.users.filter((user) => userId !== user.id); this.users = updatedUsers;
    }

    getUsernames(): string[] {
        return this.utilService.pluck(this.users, 'name');
    }
}