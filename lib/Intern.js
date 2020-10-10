const Employee = require ("./Employee");

// Use Employee & Intern classes
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getOfficeNumber() {
        return this.school;
    }
}

module.exports = Intern;
