const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const team = [];
const idArr = [];

// find out what type of employee they are
function addTeamMember() {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'What type of employee are you entering?',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
    ])
    .then(answers => {
        mainQuestions(answers.role)
    })
};

// array of questions for every employee
function mainQuestions(teamMemberRole) {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team member?',
            validate: answer => {
                if (answer !== '') {
                    return true;
                } 
                return ('You must enter a name!');
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the employee id',
            validate: answer => {
                const pass = answer.match(
                    /[1-9]/                
                );
                if (pass) {
                    return true;
                }
                return ('You need to input a number')
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address',
            validate: answer => {
                const pass = answer.match(
                    /\S+@\S+\.\S+/                
                );
                if (pass) {
                    return true;
                }
                return ('You need to input a valid email address')
            }
        },
    ]) 
    .then(answers => {
        if (teamMemberRole === "Engineer") {
            return engineerQuestions(answers.name, answers.id, answers.email);
        } else if (teamMemberRole === "Intern") {
            return internQuestions(answers.name, answers.id, answers.email);
        } else {
            return managerQuestions(answers.name, answers.id, answers.email);
        }
    })
};

// array of questions for managers only
function managerQuestions(name, id, email) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the office phone number (No dashes)',
            validate: answer => {
                const pass = answer.match(
                    /[1-9]/                
                );
                if (pass) {
                    return true;
                }
                return ('You need to input a number')
            }
        },
    ])
    .then(answers => {
        const manager = new Manager (name, id, email, answers.officeNumber);
        team.push(manager)
        idArr.push(id)
        addMoreTeamMembers();
    })
};

// array of questions for interns only
function internQuestions(name, id, email) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'What school do they attend?',
            validate: answer => {
                if (answer !== '') {
                    return true;
                } 
                return ('You must enter a school!');
            }
        },
    ])
    .then(answers => {
        const intern = new Intern (name, id, email, answers.school);
        team.push(intern)
        idArr.push(id)
        addMoreTeamMembers();
    })
}

// array of questions for engineers only
function engineerQuestions(name, id, email) {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'github',
            message: 'What is their github name?',
            validate: answer => {
                if (answer !== '') {
                    return true;
                } 
                return ('You must enter a github name!');
            }
        },
    ])
    .then(answers => {
        const engineer = new Engineer (name, id, email, answers.github);
        team.push(engineer)
        idArr.push(id)
        addMoreTeamMembers();
    })
}

// ask if another team member should be added
function addMoreTeamMembers() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'add',
            message: 'Do you want to add another team member?',
            choices: ["Yes", "No"]
        },
    ])
    .then(answers => {
        if (answers.add === "Yes") {
            return addTeamMember();
        } else {
            buildTeam();
        }
    })
};

// function to initialize program
function init() {
    addTeamMember()
   
}

// function call to initialize program
init();

// build the team
function buildTeam() {
    // create the output directory if it doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(team), 'utf-8');
  }