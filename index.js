// Packages required for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Array of questions prompted for user input in terminal
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
        choices: ["Apache2.0", "Boost", "BSD 3-Clause", "MIT", "none"],
     },
     {
        type: "input",
        name: "contribution",
        message: "Please state the guidelines as to how other people can contribute to this project.",
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
    .then((data) => {

// README outline for application
const readme = 
  `# 📖 ${data.title}
  
  ## License

  ![license](https://img.shields.io/static/v1?label=license&message=${data.license}&color=success)
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contribution Guidelines
  
  ${data.contribution}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions?
  
  Please contact me at either of the following for any inquiries about the project.

  * GitHub Profile: [${data.username}](https://github.com/${data.username})
  * Email: ${data.email}`
  
// Function that will generate README file with user input
  fs.writeFile("README.md", readme, (err) =>
  err ? console.log(err) : console.log("README Generated Successfully!")
);

});
