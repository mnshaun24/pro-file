const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name = "", id = "", email = "", officeNumber = "") {
        super(name, id, email) 

        this.officeNumber = Math.floor(Math.random() * 10 + 10);

    }

    getRole() {
        return {
            role: "Manager"
        };
    }
};

module.exports = Manager;