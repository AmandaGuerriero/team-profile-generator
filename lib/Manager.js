const { isModuleSpecifier } = require("@babel/types")

function Manager(role, name, id, email) {
    this.role = role;
    this.name = name;
    this.id = id;
    this.email = email;
}

module.exports = Manager;