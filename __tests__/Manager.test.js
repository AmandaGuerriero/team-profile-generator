const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test('manager name is set', () => {
    const manager = new Manager('Manager', 'Michael', 100, 'email@email.com');

    expect(manager.role).toBe('Manager');
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
})