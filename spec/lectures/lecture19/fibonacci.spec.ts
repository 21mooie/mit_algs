import { bottomUpFibonacci, memoFibonacci, naiveFibonacci } from "../../../lectures/lecture19/fibonacci";

describe('Fibonacci', () => {
    describe('naive', () => {
        it('should be able to return the base case of fibonacci.', () => {
            expect(naiveFibonacci(1)).toBe(1);
        });
        it('should be able to return the nth number in the sequence.', () => {
            expect(naiveFibonacci(7)).toBe(13);
        });
    });

    describe('memo', () => {
        it('should be able to return the base case of fibonacci.', () => {
            expect(memoFibonacci(1)).toBe(1);
        });
        it('should be able to return the nth number in the sequence.', () => {
            expect(memoFibonacci(7)).toBe(13);
        });
    });

    describe('bottom up', () => {
        it('should be able to return the base case of fibonacci.', () => {
            expect(bottomUpFibonacci(1)).toBe(1);
        });
        it('should be able to return the nth number in the sequence.', () => {
            expect(bottomUpFibonacci(7)).toBe(13);
        });
    });
    
});