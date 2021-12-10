const Intern = require("../lib/Intern.js");

test("creates an intern object", () => {
    const intern = new Intern("Guy", "0", "intern@panda.com", "Stale");

    expect(intern.name).toBe("Guy");
    expect(intern.id).toBe("0");
    expect(intern.email).toBe("intern@panda.com");
    expect(intern.school).toBe("Stale");
});