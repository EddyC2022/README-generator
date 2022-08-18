
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT':
    return 'https://img.shields.io/badge/License-MIT-blue';
    case 'GNU':
    return 'https://img.shields.io/badge/License-GNU-blue';
    case 'ISC':
    return 'https://img.shields.io/badge/License-ISC-blue'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT':
    return 'https://opensource.org/licenses/MIT';
    case 'GNU':
    return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    case 'ISC':
    return 'https://opensource.org/licenses/ISC'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license){
    case 'MIT':
    return `Licensed under the [MIT](${renderLicenseLink(license)}) license`;
    case 'GNU':
    return `Licensed under the [GNU](${renderLicenseLink(license)}) license`;
    case 'ISC':
    return `Licensed under the [ISC](${renderLicenseLink(license)}) license`;
  };
  }


// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ project_title, description, installation, usage, contribution,test, copyright_year,  copyright_name, license,}) => {
  return `
  # ${project_title} ![](${renderLicenseBadge(license)})

  ## Description 
      
  ${description}

  
      
  ## Table of Contents
      
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Contributing](#contributing)
  * [Questions](#questions)
  * [Tests](#tests)
  * [License](#license)
      
      
  ## Installation
      
  ${installation}
      
  ## Usage 
      
  ${usage}
      
  ## Contributing

  ${contribution}

  ## Questions?
  
  Questions about this project can be directed to: 
  - Github: https://github.com/EddyC2022
  - Email: eduardoangelcruz1997@gmail.com

  ## Tests

  ${test}

  ## License
      
  ${renderLicenseSection(license)}
  _________________
  
  Copyright [${copyright_year}] [${copyright_name}]`;
}


module.exports = generateMarkdown;