// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: import the generateMarkdown function from utils/generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Write code to get user input, generate markdown, and save it to a file.
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter your GitHub username.',
            name: 'userName',
        },
        {
            type: 'input',
            message: 'Please enter your email.',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'projectName',
        },
        {
            type: 'input',
            message: 'What was your motivation?',
            name: 'motivation',
        },
        {
            type: 'input',
            message: 'Why did you build this project?',
            name: 'whyBuilt',
        },
        {
            type: 'input',
            message: 'What problem does it solve?',
            name: 'problemSolve',
        },
        {
            type: 'input',
            message: 'What did you learn?',
            name: 'whatLearned',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please provide instructions and examples for use.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please include links to those who help you completed this project.',
            name: 'credits',
        },
        {
            type: 'list',
            message: 'What kind of license should your project have?',
            name: 'license',
            choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'None'],
        },
        {
            type: 'input',
            message: 'Please provide examples on how to run your application here.',
            name: 'tests',
        },
    ])
    .then((answer) => {
        console.log(answer);
        const readmeContent = generateMarkdown(answer);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Creating README.md...')
        );
    })