const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for every employee
function addTeamMember() {
    inquirer.prompt ([
        {
            type: 'checkbox',
            name: 'role',
            message: 'What type of employee are you entering?',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
    ])
    .then(answers => {
        mainQuestions(answers)
    })
};


function mainQuestions() {
    inquirer.prompt ([
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
    ]) 
    .then(answers => {
        if (this.role === "Engineer") {
            engineerQuestions ();
        } else if (this.role === "Intern") {
            internQuestions ();
        } else {
            managerQuestions();
        }
    })
};

// array of questions for managers only
function managerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the office phone number (No dashes)'
        },
    ])
}

// array of questions for interns only
function internQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'What school do they attend?'
        },
    ])
}

// array of questions for engineers only
function engineerQuestions() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'github',
            message: 'What is their github name?',
        },
    ])
}

// function to initialize program
function init() {
    addTeamMember()
    
    // fs.writeFile('./dist/output.html', generateMarkdown(response), (err) => {
    //         if (err) {
    //             return err;
    //         }
    //     })
}

// function call to initialize program
init();