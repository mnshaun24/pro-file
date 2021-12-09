const Manager = require("../lib/manager.js");


test("creates a manager object", () => {
    const manager = new Manager("Sue", "5678", "Sue1@panda.com");

    expect(manager.name).toBe("Sue");
    expect(manager.id).toBe("5678");
    expect(manager.email).toBe("Sue1@panda.com");
});