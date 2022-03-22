const inquirer = require("inquirer");
const fs = require("fs");


inquirer
    .prompt([
     {
        type: "input",
        name: "title",
        message: "What is the project title?",
     },
     {
        type: "input",
        name: "description",
        message: "Write a description of your project.",
     },
     {
        type: "input",
        name: "installation",
        message: "Please describe any installations involved in your project.",
     },
     {
        type: "input",
        name: "usage",
        message: "Please describe how this project can be used.",
     },
     {
        type: "list",
        name: "license",
        message: "Please state any licenses involved in this project.",
        choices: ["Apache2.0", "Boost", "BSD 3-Clause", "MIT"],
     },
     {
        type: "input",
        name: "contribution",
        message: "Please state the guidelines as to how other people can contribute this project.",
     },
     {
        type: "input",
        name: "tests",
        message: "Are there any tests? Please describe information on how they can be implemented.",
     },
     {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
     },
     {
        type: "input",
        name: "email",
        message: "Please provide your email address."
     }
     
    ])
