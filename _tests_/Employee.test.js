const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
    const employee = new Employee("Bob");

    expect(employee.name).toBe("Bob");
    expect(employee.id).toBe("Bob1");
    // expect(employee.email).toBe("Bob1@panda.com");
});


// name, id, email, getName(), getId(), getEmail(), getRole() -> Employee