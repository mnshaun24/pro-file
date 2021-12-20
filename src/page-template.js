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
        <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
        <header>
            <h1 class="my-team">My Team</h1>
        </header>

        <section class="parent-container">
            ${teamArray.map(person => {
                if (person.getRole() === "Manager") {
                    return `<div class="card">
                    <div class="top-card">
                        <h1>${person.name}</h1>
                        <h1>${person.getRole()}</h1>
                    </div>
                    <div class="bottom-card">
                        <h2>ID: ${person.id}</h2>
                        <a href= "Email: ${person.email}">${person.email}</a>
                        <h2>Office Number: ${person.officeNumber}</h2>
                    </div>
                    </div>`
                }
                if (person.getRole() === "Engineer") {
                    return `<div class="card">
                    <div class="top-card">
                        <h1>${person.name}</h1>
                        <h1>${person.getRole()}</h1>
                    </div>
                    <div class="bottom-card">
                        <h2>Id: ${person.id}</h2>
                        <a href= "Email: ${person.email}">${person.email}</a>
                        <h2>GitHub: ${person.github}</h2>
                    </div>
                    </div>`
                }
                if (person.getRole() === "Employee") {
                    return `<div class="card">
                    <div class="top-card">
                        <h1>${person.name}</h1>
                        <h1>${person.getRole()}</h1>
                    </div>
                    <div class="bottom-card">
                        <h2>ID: ${person.id}</h2>
                        <a href= "Email: ${person.email}">${person.email}</a>
                    </div>
                    </div>`
                }
                if (person.getRole() === "Intern") {
                    return `<div class="card">
                    <div class="top-card">
                        <h1>${person.name}</h1>
                        <h1>${person.getRole()}</h1>
                    </div>
                    <div class="bottom-card">
                        <h2>ID: ${person.id}</h2>
                        <a href= "Email: ${person.email}">${person.email}</a>
                        <h2>School: ${person.school}</h2>
                    </div>
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