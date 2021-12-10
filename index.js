// require files and set up functions
const inquirer = require("inquirer");
// const {fill this in later} = require("./path name")

// run function to gather information

const askManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is your team manager's name?"
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
            type: "checkbox",
            name: "chooseClass",
            message: "For which class of worker do you want to enter information?",
            choices: ["Engineer", "Employee", "Intern", "I'm finished."]
        }
    ])
    .then(userChoice => {
        if (userChoice.managerChoice === "Engineer") {
            addEngineer();
        } else if (userChoice.managerChoice === "Employee") {
            addEmployee();
        } else if (userChoice.managerChoice === "Intern") {
            addIntern();
        } else {
            console.log(currentTeam)
            myTeam();
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
};