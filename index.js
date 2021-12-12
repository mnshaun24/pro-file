// require files and set up functions
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Employee = require("./lib/Employee.js");
const Intern = require("./lib/Intern.js");
const pageGeneration = require("./src/page-template");
const { writeFile, copyFile  } = require("./src/generateHTML");

// array for team members
const currentTeam = [];

// const for final generation
var runThatHTML = function(){

};

// variable for cleaner code
const employeeChoices = () => {
    return inquirer.prompt ([
        {
            type: "list",
            name: "chooseClass",
            message: "What type of worker would you like to add?",
            choices: ["Engineer", "Employee", "Intern", "I'm finished"]
        }
    ])
    .then(userChoice => {
        if (userChoice.chooseClass === "Engineer") {
            addEngineer();
        } else if (userChoice.chooseClass === "Employee") {
            addEmployee();
        } else if (userChoice.chooseClass === "Intern") {
            addIntern();
        } else {
            console.log(currentTeam)
            runThatHTML(currentTeam)
                .then(currentTeam => {
                    return pageGeneration(currentTeam);
                })
                .then(pageHTML => {
                    return writeFile(pageHTML);
                })
                .then(writeFileResponse => {
                    console.log(writeFileResponse);
                    return copyFile();
                })
                .then(copyFileResponse => {
                    console.log(copyFileResponse);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    })
};

// run function to gather information

const askManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is your team manager's name?",
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    console.log("Please enter your team manager's name.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "Provide your manager ID."
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Provide your email address."
        },
    ])
    .then (managerData => {
        manager = new Manager(managerData.name, managerData.id, managerData.email);
        currentTeam.push(manager);
        employeeChoices();
    })
};

const addEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the name of your engineer?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is your engineer's ID?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your engineer's email address?"
        },
        {
            type: "input",
            name: "engineerOffice",
            message: "What is your engineer's office number?"
        },
    ])
    .then(engineerData => {
        engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.office);
        currentTeam.push(engineer);
        employeeChoices();
    })
};

const addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "What is the name of your employee?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is your employee's ID?"
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "What is your employee's email address?"
        },
    ])
    .then(employeeData => {
        employee = new Employee(employeeData.name, employeeData.id, employeeData.email);
        currentTeam.push(employee);
        employeeChoices();
    })
};

const addIntern = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's ID?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "From which school did this intern come?"
        },
    ])
    .then(internData => {
        intern = new Intern(internData.name, internData.id, internData.email, internData.school);
        currentTeam.push(internData);
        employeeChoices();
    })
};




runThatHTML()
    .then(currentTeam => {
        return generateHTML(currentTeam);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    })