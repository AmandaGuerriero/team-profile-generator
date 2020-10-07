const { isModuleSpecifier } = require("@babel/types")

function Manager(name) {
    this.name = name
}

module.exports = Manager;