const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for every employee
const mainQuestions = [
    {
        type: 'checkbox',
        name: 'type',
        message: 'What type of employee are you entering?',
        choices: ["Manger", "Engineer", "Intern"]
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the team member?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You must enter a name!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter the employee id'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the email address',
    },
];

// array of questions for managers only
const managerQuestions = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter the office phone number (No dashes)'
    },
]

// array of questions for interns only
const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: 'What school do they attend?'
    },
]

// array of questions for engineers only
const engineerQuestions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is their github name?',
    },
]

// function to initialize program
function init() {
    inquirer
    .prompt(mainQuestions)
    .then((response) =>  {
        fs.writeFile('./dist/output.html', generateMarkdown(response), (err) => {
            if (err) {
                return err;
            }
        })
    });
}

// function call to initialize program
init();