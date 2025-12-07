import { pApp } from './pApp.js';

describe('is a Function', () => {
    it('is a function', () => {
        expect(pApp).toBeInstanceOf(Function);
    })
})