const Employee = require ("./Employee");

// Use Employee & Manager classes
class Manager extends Employee {
    constructor (name, id, email, role, officeNumber) {
        super (name, id, email);
        this.role = role
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;
