const Manager = require("../lib/Manager");

test('manager name is set', () => {
    const manager = new Manager('Michael');

    expect(manager.name).toBe('Michael');
})