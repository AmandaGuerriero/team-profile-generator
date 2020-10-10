const Engineer = require("../lib/Engineer");

test('engineer is set', () => {
    const engineer = new Engineer('Curtis', 28, 'curtis@email.com', 'curtismartin');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})