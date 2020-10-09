const Employee = require("../lib/Employee");

test('employee fields are set', () => {
    const employee = new Employee('Michael', 100, 'email@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})