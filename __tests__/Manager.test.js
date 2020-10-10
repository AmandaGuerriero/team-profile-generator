const Manager = require("../lib/Manager");

test('manager is set', () => {
    const manager = new Manager(' Michael', 100, 'email@email.com', 555555);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})