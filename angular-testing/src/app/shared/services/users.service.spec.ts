import { UserInterface } from "../types/user.interface";
import { UtilsService } from "../utils/util.service";
import { UsersService } from "./users.service";
import { TestBed } from '@angular/core/testing';

describe('UserService', () => {
    let userService: UsersService;
    let utilsService: UtilsService;
    const utilsServiceMock = {
        pluck: jest.fn(),
    };
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                UsersService,
                //  { provide: UtilsService, useValue: utilsServiceMock }
                UtilsService
            ]
        });

        userService = TestBed.inject(UsersService);
        utilsService = TestBed.inject(UtilsService);
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

    describe('getUsernames', () => {
        it('should get usernames', () => {
            jest.spyOn(utilsService, 'pluck');
            userService.users = [{ id: '3', name: 'foo' }];
            userService.getUsernames();
            expect(utilsService.pluck).toHaveBeenCalledOnceWith(
                userService.users,
                'name'
            )
            // utilsServiceMock.pluck.mockReturnValue(['foo'])
            // expect(userService.getUsernames()).toEqual(['foo']);
        });
    });
});