// enable fs to use captured information
const fs = require("fs");

// create html cards for each class

const generateHTML = (classData) => {
    console.log("This is", classData);

    return `<!DOCTYPE html>
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
    
        <!-- manager card -->
        <section>
            <h2>${classData.managerName}</h2>
        </section>
    </body>
    </html>
    `
};

// write the output and include promise
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./output/myTeam.html", fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
};

// make sure functions are ready for use in index
module.exports = { generateHTML, writeFile };