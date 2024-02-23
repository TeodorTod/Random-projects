import { UserInterface } from "../types/user.interface";
import { UsersService } from "./users.service";
import { TestBed } from '@angular/core/testing';

describe('UserService', () => {
    let userService: UsersService;
    const utilsServiceMock = {
        pluck: jest.fn(),
    };
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UsersService,]
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
            expect(userService.users$.getValue()).toEqual([user])
        });
    });

    describe('removeUser', () => {
        it('should remove user', () => {
            userService.users$.next([{ id: '3', name: 'foo' }]);
            userService.removeUser('3');
            expect(userService.users$.getValue()).toEqual([])
        })
    });


});