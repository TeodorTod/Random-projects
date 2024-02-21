import { UserInterface } from "../types/user.interface";
import { UsersService } from "./users.service";
import { TestBed } from '@angular/core/testing';

describe('UserService', () => {
    let userService: UsersService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UsersService]
        });

        userService = TestBed.inject(UsersService);
    });

    it('creates a service', () => {
        expect(UsersService).toBeTruthy();
    });

    describe('addUser', () => {
        it('should add a user', () => {
            const user: UserInterface = {
                id: '3',
                name: 'Pencho'
            };
            userService.addUser(user);
            expect(userService.users).toEqual([user])
        });
    });

    describe('removeUser', () => {
        it('should remove user', () => {
            userService.users = [{ id: '3', name: 'foo' }];
            userService.removeUser('3');
            expect(userService.users).toEqual([])
        })
    });
});