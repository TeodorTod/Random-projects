import { pluck, range, test } from "./utils";

describe('utils', () => {
    describe('range', () => {
        it('returns correct range from one to five', () => {
            expect(range(1, 5)).toEqual([1, 2, 3, 4])
        });
    });

    describe('pluck', () => {
        it('return correct result', () => {
            const data = [
                { id: 1, name: 'foo' },
                { id: 2, name: 'bar' },
                { id: 3, name: 'baz' },
            ]
            expect(pluck(data, 'id')).toEqual([1, 2, 3])
        });
    });

    describe('test', () => {
        it('test comparison', () => {
            expect(test(5)).toEqual([0, 1, 2, 3, 4])
        });
    });
})