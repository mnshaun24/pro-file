const Engineer = require("../lib/Engineer.js");

test("creates an engineer object", () => {
    const engineer = new Engineer("Lou", "1112", "Lou1@panda.com", "Lou@github.com");

    expect(engineer.name).toBe("Lou");
    expect(engineer.id).toBe("1112");
    expect(engineer.email).toBe("Lou1@panda.com");
    expect(engineer.github).toBe("Lou@github.com");
});