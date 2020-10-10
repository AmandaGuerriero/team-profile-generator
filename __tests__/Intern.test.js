const Intern = require("../lib/Intern");

test('intern is set', () => {
    const intern = new Intern('Chad', 10, 'chad@email.com', 'UCLA');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})