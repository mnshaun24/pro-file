const fs = require("fs");

const writeThatHTML = teamText => {
    if (!teamText) {
        return '';
    }

    console.log("this is the log on page-template", teamText);

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
            <h2>${teamText.managerName}</h2>

    </body>
    </html>
    `
};

module.exports = writeThatHTML;