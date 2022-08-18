const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./generateMarkdown')

// questions used to create README
const questions = [{
  
    type: 'input',
    name: 'copyright_name',
    message: 'What is your full name?',
  },
  {
    type: 'input',
    name: 'project_title',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'please describe your project functionality',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'if there are any installation instructions, please enter them below. if N/A then enter N/A or leave blank.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'if there is any usage information, please enter it below. if N/A then enter N/A or leave blank.',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'enter information that you would like to contribute to the project. for contribution guidelines please refer to the link that will be generated below',
  },
  {
    type: 'input',
    name: 'test',
    message: '',
  },
  {
    type: 'input',
    name: 'copyright_year',
    message: 'please enter the year the project was developed for copyright purposes',
  },
  {
  type: "list",
  name: "license",
  message:"What kind of license should your project have?",
  choices: ["MIT", "GNU", "ISC"],
  default: ["MIT"]
  }]

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("You've successfully generated a README!"))
  }
  
  // function to construct readme content
  function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        const readmePageContent = generateMarkDown(answers);
  
        writeToFile('README.md', readmePageContent);
      });
  }
  
  // Calling the function 
  init();


