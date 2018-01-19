const sayHello = () => {
    return 'hello';
};

describe('hello.js', () => {
    it('sayHello', () => {
        expect(sayHello()).toBe('hello');
        expect(sayHello()).not.toBe('bye');
    });
});