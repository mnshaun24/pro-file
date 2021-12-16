const fs = require("fs");

const writeThatHTML = teamArray => {
    if (!teamArray) {
        return '';
    }


    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team Member Information</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>

        <section>
            ${teamArray.map(person => {
                if (person.getRole() === "Manager") {
                    return `<div class="card">
                        <h1>${person.name}</h1>
                        <h1>${person.getRole()}</h1>
                        <h2>${person.id}</h2>
                        <h2>${person.email}</h2>
                        <h2>${person.officeNumber}</h2>
                    </div>`
                }
                if (person.getRole() === "Engineer") {
                    return `<div class="card">
                        <h1>${person.name}</h1>
                        <h1>${person.getRole()}</h1>
                        <h2>${person.id}</h2>
                        <h2>${person.email}</h2>
                        <h2>${person.github}</h2>
                    </div>`
                }
                if (person.getRole() === "Employee") {
                    return `<div class="card">
                        <h1>${person.name}</h1>
                        <h1>${person.getRole()}</h1>
                        <h2>${person.id}</h2>
                        <h2>${person.email}</h2>
                    </div>`
                }
                if (person.getRole() === "Intern") {
                    return `<div class="card">
                        <h1>${person.name}</h1>
                        <h1>${person.getRole()}</h1>
                        <h2>${person.id}</h2>
                        <h2>${person.email}</h2>
                        <h2>${person.school}</h2>
                    </div>`
                }

            }) .join("")
        }

        </section>

    </body>
    </html>
    `
};

module.exports = writeThatHTML;