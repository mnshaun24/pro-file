// enable fs to use captured information
const fs = require("fs");


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

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile("./dist/style.css", err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "Stylesheet created!"
            });
        });
    });
}

// make sure functions are ready for use in index
module.exports = { writeFile, copyFile };