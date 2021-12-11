// require files and set up functions
const inquirer = require("inquirer")
// const {fill this in later} = require("./path name")

// array for team members
const currentTeam = [];

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
        {
            type: "list",
            name: "chooseClass",
            message: "For which class of worker do you want to enter information?",
            choices: ["Engineer", "Employee", "Intern", "I'm finished."]
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
            // myTeam();
        }
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
        }
    ])
    .then(({ engineerName }) => {
        currentTeam.push(engineerName);
        console.log(currentTeam);
    });
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
    .then(({ employeeName }) => {
        currentTeam.push(employeeName);
        console.log(currentTeam);
    });
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
        }
    ])
    .then(({ internName }) => {
        currentTeam.push(internName);
        console.log(currentTeam);
    });
};

askManager();