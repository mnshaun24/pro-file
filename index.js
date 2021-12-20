// require files and set up functions
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Employee = require("./lib/Employee.js");
const Intern = require("./lib/Intern.js");
const pageGeneration = require("./src/page-template");
const { writeFile, copyFile } = require("./src/generateHTML");

// array for team members
const currentTeam = [];

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
            const htmlContent = pageGeneration(currentTeam)
                writeFile(htmlContent)
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
        manager = new Manager(managerData.managerName, managerData.managerId, managerData.managerEmail);
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
            name: "engineerHub",
            message: "What is your engineer's gitHub profile?"
        },
    ])
    .then(engineerData => {
        engineer = new Engineer(engineerData.engineerName, engineerData.engineerId, engineerData.engineerEmail, engineerData.engineerHub);
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
        employee = new Employee(employeeData.employeeName, employeeData.employeeId, employeeData.employeeEmail);
        console.log(employee.getRole())
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
        intern = new Intern(internData.internName, internData.internId, internData.internEmail, internData.internSchool);
        currentTeam.push(intern);
        employeeChoices();
    })
};

askManager();