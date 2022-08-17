const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./generateMarkdown')

// const generateREADME = ({ project_title, description, installation, usage, contribution,test, copyright_year,  copyright_name }) =>
  // `# ${project_title} ![](https://img.shields.io/badge/license-MIT-blue)
  
  // ## Description 
      
  // ${description}

  
      
  // ## Table of Contents
      
  // * [Installation](#installation)
  // * [Usage](#usage)
  // * [Credits](#credits)
  // * [Contributing](#contributing)
  // * [Questions](#questions)
  // * [Tests](#tests)
  // * [License](#license)
      
      
  // ## Installation
      
  // ${installation}
      
  // ## Usage 
      
  // ${usage}
      
  // ## Contributing

  // ${contribution}

  // ## Questions?
  
  // Questions about this project can be directed to: 
  // - Github: /EddyC2022
  // - Email: eduardoangelcruz1997@gmail.com

  // ## Tests

  // ${test}

  // ## License
      
  // Content in this project is governed under the MIT License. 

  // To read the license in its entirety, click here: [MIT](./LICENSE)

  // -----------
  
  // Copyright [${copyright_year}] [${copyright_name}]`;

inquirer
  .prompt([
    {
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
    }
  ])
  .then((answers) => {
    const READMEPageContent = generateMarkDown(answers);

    fs.writeFile('README.md', READMEPageContent, (err) => err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });

  generateMarkDown
